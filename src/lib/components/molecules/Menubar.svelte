<script lang="ts">
	import Navbar from '$lib/components/atoms/Navbar.svelte';
	import type { TMenuBarItems } from '$lib/interfaces/TMenuBarItems';
	import TieredMenu from './TieredMenu.svelte';
	import type { TThemeColor } from "$lib/interfaces/TThemeColor";

	export let items: TMenuBarItems = [];
	export let isMenu = true;
	export let isFixed = true;
	export let theme: TThemeColor = 'white';
</script>

<Navbar {isMenu} {isFixed} {theme} class={$$props.class}>
	{#if $$slots.start}
		<div class="start">
			<slot name="start"/>
		</div>
	{/if}
	<TieredMenu horizontal {items}/>
	{#if $$slots.end}
		<div class="end">
			<slot name="end"/>
		</div>
	{/if}
</Navbar>

<style lang="scss">
	.start {
		margin-left: 10px;
		margin-right: 10px;
	}
	.end {
		margin-left: auto;
		align-self: center;
	}
</style>
