<script lang="ts">
	import type { TMenuBarItems } from '$lib/interfaces/TMenuBarItems';
	import MenuItem from '../atoms/MenuItem.svelte';

	export let items: TMenuBarItems = [];
	export let onClick = (e, {item, index}) => {
	}
</script>

<ul class="UI-MenuList">
	{#each items as item,index}
		<MenuItem on:click={e=> onClick(e,{item,index})} icon={item.icon} href={item.href} isHeader={item.isHeader}
				  {...item}>
			{item.label}
		</MenuItem>
		{#if !!item.items}
			<svelte:self items={item.items}/>
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
