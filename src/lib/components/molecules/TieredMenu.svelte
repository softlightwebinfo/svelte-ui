<script lang="ts">
	import MenuAtom from '$lib/components/atoms/MenuAtom.svelte';
	import type { TMenuBarItems } from '$lib/interfaces/TMenuBarItems';
	import MenuItem from '../atoms/MenuItem.svelte';
	import MenuSeparator from '../atoms/MenuSeparator.svelte';

	export let items: TMenuBarItems = [];
	export let horizontal: boolean = false;
</script>

{#if items.length}
	<ul class="UI-TieredMenu" class:horizontal>
		{#each items as item}
			{#if item.separator}
				<MenuSeparator />
			{:else}
				<MenuItem
					command={item.command}
					disabled={item.disabled}
					href={item.href}
					icon={item.icon}
					iconRight={item.items && 'fa fa-chevron-right'}
				>
					{item.label}
					<MenuAtom slot="content" show={!!item.items}>
						<svelte:self items={item.items} />
					</MenuAtom>
				</MenuItem>
			{/if}
		{/each}
	</ul>
{/if}

<style lang="scss">
	ul {
		:global(.UI-MenuAtom) {
			display: none;
		}
		> :global(.UI-MenuItem:hover > .UI-MenuAtom) {
			display: flex;
			position: absolute;
			left: 100%;
			flex-direction: column;
			top: 0;
		}
	}
	.horizontal {
		display: flex;
		> :global(.UI-MenuItem:hover > .UI-MenuAtom) {
			top: 100%;
			left: 0;
		}
	}
</style>
