<script lang="ts">
	import type { IItem } from '$lib/interfaces/IItem';
	import Chevron from '../atoms/Chevron.svelte';
	import MenuItemLink from '../atoms/MenuItemLink.svelte';

	export let items: IItem[];
	export let home: IItem;
	export let isDefault = false;
</script>

<nav class="UI-BreadCrumb" class:isDefault style="{$$props.style}">
	<ul>
		<li class="home">
			<MenuItemLink href={home.href} icon={home.icon}/>
		</li>
		{#each items as item}
			<li>
				<Chevron/>
			</li>
			<li>
				<MenuItemLink {...item}/>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		background: var(--ui-white);
		border: 1px solid #dee2e6;
		border-radius: var(--ui-radius);
		padding: 1rem;
		width: 100%;
		overflow-x: auto;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
	}

	.isDefault {
		background: transparent;
		border: 0;
		padding: 0;
	}
</style>
