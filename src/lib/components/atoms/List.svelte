<script lang="ts">
	import type { IOption, IOptions } from '$lib/interfaces/IOption';
	import MenuItem from './MenuItem.svelte';

	export let items: IOptions[];
	export let optionGroupChildren: string = 'items';
	export let optionGroupLabel: string = 'label';
	export let optionLabel: string = 'label';
	export let isGroupItems: boolean = false;
	export let value: string = '';
</script>

{#each items as item, index}
	<slot {item} {isGroupItems}>
		<MenuItem {...item} isHeader={!!item.items} active={value == item.value} {index} on:click>
			{item[isGroupItems ? optionGroupLabel : optionLabel]}
		</MenuItem>
		{#if item[optionGroupChildren]}
			<svelte:self
				on:click
				items={item[optionGroupChildren]}
				{optionGroupChildren}
				{optionGroupLabel}
				{optionLabel}
				isGroupItems
				{value}
			/>
		{/if}
	</slot>
{/each}

<style lang="scss">
</style>
