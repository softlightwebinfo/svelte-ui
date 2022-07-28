<script lang="ts">
	import type { TMenuBarItems } from '$lib/interfaces/TMenuBarItems';
	import MenuItem from '../atoms/MenuItem.svelte';
	import Menu from './Menu.svelte';

	export let items: TMenuBarItems = [];
</script>

<ul class="UI-MenuList">
	{#each items as item}
		<MenuItem icon={item.icon} href={item.href} isHeader={item.isHeader}>
			{item.label}
		</MenuItem>
		{#if !!item.items}
			<svelte:self items={item.items} />
		{/if}
	{/each}
</ul>

<style lang="scss">
	ul {
		margin: 0;
		padding: 0;
		list-style: none;
	}
</style>
