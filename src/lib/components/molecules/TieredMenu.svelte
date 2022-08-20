<script lang="ts">
	import MenuAtom from '$lib/components/atoms/MenuAtom.svelte';
	import type { TMenuBarItems } from '$lib/interfaces/TMenuBarItems';
	import MenuItem from '../atoms/MenuItem.svelte';
	import MenuSeparator from '../atoms/MenuSeparator.svelte';

	export let items: TMenuBarItems = [];
	export let horizontal = false;
	export let desplegable = false;
</script>

{#if items.length}
	<ul class="UI-TieredMenu" class:horizontal class:desplegable>
		{#each items as item,index}
			{#if item.separator}
				<MenuSeparator/>
			{:else}
				<MenuItem
					on:click={(e)=>{
						if(!item.items.length) return;
						e.detail.event.stopPropagation()
						item.open = !item.open;
					}}
					command={item.command}
					disabled={item.disabled}
					href={item.href}
					icon={item.icon}
					active={item.active}
					iconRight={item.items && `fa fa-chevron-${item.open ? 'down': 'right'}`}
					open="{item.open}"
				>
					{item.label}
					<MenuAtom slot="content" show={!!item.items}>
						<svelte:self items={item.items} {desplegable}/>
					</MenuAtom>
				</MenuItem>
			{/if}
		{/each}
	</ul>
{/if}

<style lang="scss">
	ul {
		width: 100%;

		:global(.UI-MenuAtom) {
			display: none;
		}

		&:not(.desplegable) {
			> :global(.UI-MenuItem:hover > .UI-MenuAtom) {
				display: flex;
				position: absolute;
				left: 100%;
				flex-direction: column;
				top: 0;
			}
		}
	}

	.horizontal {
		display: flex;

		&:not(.desplegable) {
			> :global(.UI-MenuItem:hover > .UI-MenuAtom) {
				top: 100%;
				left: 0;
			}
		}
	}

	.desplegable {
		position: relative;

		:global(.UI-MenuItem.open > .UI-MenuAtom) {
			display: flex;
			position: relative;
			width: 100%;
			border: 0;
			border-top: 1px solid gainsboro;
			border-radius: 0;
			border-bottom: 1px solid gainsboro;
			background: whitesmoke;
		}
	}
</style>
