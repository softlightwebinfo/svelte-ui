<script lang="ts">
	import { keyEnter } from '$lib/actions/keyEnter';
	import type { ISelectBase } from '$lib/interfaces/ISelectBase';
	import { BEM } from '$lib/models/BEM';
	import Chip from '../atoms/Chip.svelte';

	const bm = new BEM('UI-Chips');
	bm.append($$props.class);

	export let separator = '';
	export let value: ISelectBase[] = [];
	export let data: string = '';
	export let placeholder: string = '';
	export let isUnique: boolean = true;
	export let minLength: number | undefined = undefined;
	export let maxLength: number | undefined = undefined;

	let input: any;

	const getUnique = (valueInput: string) => {
		if (!isUnique) return true;
		return !value.filter((i) => i.value == valueInput).length;
	};

	const isMin = (value: string) => (minLength ? value.trim().length < minLength : false);
	const isMax = (value: string) => (maxLength ? value.trim().length > maxLength : false);

	const onEnter = ({ target }: any) => {
		if (!target.value.trim()) return;
		if (!getUnique(target.value)) return;
		if (isMin(target.value)) return;
		if (isMax(target.value)) return;
		value = [
			...value,
			{
				label: target.value,
				value: target.value
			}
		];
		data = '';
	};

	const onDelete = (item: ISelectBase, index: number) => () => {
		value = value.filter((_, i) => i != index);
		input.focus();
	};
</script>

<div class={bm.toString()}>
	<ul>
		{#each value as item, index}
			<li>
				<slot {item} {onDelete} {index}>
					<Chip
						removable
						label={item.label}
						icon={item.icon}
						on:delete={onDelete(item, index)}
					/>
				</slot>
			</li>
		{/each}
		<li class="input">
			<input
				bind:this={input}
				{placeholder}
				type="text"
				bind:value={data}
				use:keyEnter={{ separator }}
				on:enter={onEnter}
			/>
		</li>
	</ul>
</div>

<style lang="scss">
	.UI-Chips {
		display: flex;
		position: relative;
	}
	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		cursor: text;
		overflow: hidden;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		padding: 0.375rem 0.75rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		font-size: 1rem;
		color: #495057;
		background: #ffffff;
		border: 1px solid #ced4da;
		transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
		appearance: none;
		border-radius: 6px;
		gap: 5px;
	}
	.input {
		flex: 1 1 auto;
		display: inline-flex;
		padding: 0.375rem 0;
	}
	input {
		border: 0;
		outline: 0 none;
		background-color: transparent;
		margin: 0;
		padding: 0;
		box-shadow: none;
		border-radius: 0;
		width: 100%;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
			sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
		font-size: 1rem;
		color: #495057;
		padding: 0;
		margin: 0;
	}
</style>
