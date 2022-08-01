<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import { slide } from 'svelte/transition'
	import type { TPosition } from "$lib/interfaces/TPosition";
	import Arrow from "./Arrow.svelte";

	export let position: TPosition = "left"
	export let showArrow = true;

	const bm = new BEM('UI-DropdownMenu', {
		[position]: !!position,
	});
	bm.append($$props.class);
</script>
<div transition:slide class={bm.toString()} style={$$props.style} class:showArrow>
	{#if showArrow}
		<Arrow/>
	{/if}
	<slot/>
</div>
<style lang='scss'>
	.UI-DropdownMenu {
		background: var(--ui-white);
		color: #495057;
		border: 0 none;
		border-radius: var(--ui-radius);
		box-shadow: var(--ui-raised);
		min-width: 15em;

		&.showArrow {
			margin-top: 15px;
		}

		:global(.UI-Arrow) {
			position: absolute;
			bottom: 100%;
			right: 5px;
		}
	}
</style>
