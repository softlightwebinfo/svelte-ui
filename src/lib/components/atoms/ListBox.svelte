<script lang="ts">
	import type { IOptions } from '$lib/interfaces/IOption';

	import { BEM } from '$lib/models/BEM';
	import FloatIcon from './FloatIcon.svelte';
	import Input from './Input.svelte';
	import List from './List.svelte';
	import MenuAtom from './MenuAtom.svelte';

	export let items: IOptions[];
	export let value: string = '';
	export let filter: boolean = false;
	export let optionLabel: string = 'label';
	export let optionGroupChildren: string = 'items';
	export let optionGroupLabel: string = 'label';
	export let overflow: number = 400;
	export let placeholder: string = 'Search';
	export let searchValue: string = '';
	export let filterSarch: string[] = ['label'];
	export let textNoItems: string = 'No items';
	export let show: boolean = true;

	const bm = new BEM('UI-ListBox', {});
	bm.append($$props.class);

	$: _items = filterData(items, filter, filterSarch, searchValue);

	function filterData(
		items: IOptions[],
		filter: boolean,
		filterSarch: string[],
		searchValue: string
	): any {
		if (!filter) return items;
		return items.filter((i) => {
			return filterSarch
				.map((it) => i[it].trim().toLowerCase().includes(searchValue.trim().toLowerCase()))
				.includes(true);
		});
	}
</script>

<div
	class={bm.toString()}
	style={$$props.style}
	class:overflow
	style:--ui-co-list-box__overflow={`${overflow}px`}
>
	<MenuAtom {show}>
		{#if filter}
			<header>
				<FloatIcon iconRight="fa fa-search">
					<Input {placeholder} bind:value={searchValue} />
				</FloatIcon>
			</header>
		{/if}
		<ul>
			{#if !!_items.length}
				<List
					on:click
					{value}
					items={_items}
					{optionGroupChildren}
					{optionGroupLabel}
					{optionLabel}
				/>
			{:else}
				<p>{textNoItems}</p>
			{/if}
		</ul>
	</MenuAtom>
</div>

<style lang="scss">
	.UI-ListBox {
	}
	.overflow {
		ul {
			overflow: auto;
			max-height: var(--ui-co-list-box__overflow);
		}
	}
	header {
		padding: 0.75rem 1.25rem;
		border-bottom: 1px solid #dee2e6;
		color: #343a40;
		background: #f8f9fa;
		margin: 0;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;
	}
	p {
		padding: 10px;
		margin: 0;
		color: var(--ui-danger);
	}
</style>
