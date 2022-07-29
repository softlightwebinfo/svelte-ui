<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let isHeader = false;
	export let href = '#';
	export let icon = '';
	export let iconRight = '';
	export let disabled = false;
	export let command: (event: any) => void = () => {
	};
	export let active = false;
	export let open = false;
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-MenuItem', {});
	bm.append($$props.class);
</script>

<li
	class={bm.toString()}
	class:isHeader
	class:disabled
	class:active
	class:open
	on:click={(e) => {
		dispatch('click', {...$$props, event:e});
		if(command){
			command({ event: e, item: $$props });
		}
	}}
>
	{#if isHeader}
		{#if icon}
			<span class="icon">
				<i class={icon} />
			</span>
		{/if}
		<span class="text">
			<slot />
		</span>
		{#if iconRight}
			<span class="icon-right">
				<i class={iconRight} />
			</span>
		{/if}
	{:else}
		<a {href}>
			{#if icon}
				<span class="icon">
					<i class={icon} />
				</span>
			{/if}
			<span class="text">
				<slot />
			</span>
			{#if iconRight}
				<span class="icon-right">
					<i class={iconRight} />
				</span>
			{/if}
		</a>
	{/if}
	<slot name="content" />
</li>

<style lang="scss">
	li {
		color: #495057;
		position: relative;
	}
	a {
		cursor: pointer;
		display: flex;
		align-items: center;
		text-decoration: none;
		overflow: hidden;
		position: relative;
		padding: 0.75rem 1.25rem;
		color: #495057;
		transition: box-shadow 0.2s;
		user-select: none;
		&:hover {
			&:not(.disabled):hover {
				background: #e9ecef;
			}
		}
	}
	.icon-right {
		margin-left: auto;
		padding-left: 10px;
	}
	.text {
		color: #495057;
	}
	.icon {
		color: #6c757d;
		margin-right: 0.5rem;
	}
	.isHeader {
		margin: 0;
		padding: 0.75rem 1.25rem;
		color: #343a40;
		background: #ffffff;
		font-weight: 700;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
	}
	.active {
		a {
			&:not(.disabled) {
				background: #e9ecef;
			}
		}
	}
</style>
