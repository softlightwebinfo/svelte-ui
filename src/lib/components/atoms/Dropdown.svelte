<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import DropdownMenu from "./DropdownMenu.svelte";
	import { createEventDispatcher } from "svelte";
	import type { TPosition } from "$lib/interfaces/TPosition";
	import { clickOutside } from "../../actions";

	const dispatch = createEventDispatcher();
	export let open = false;
	export let position: TPosition = "left"
	export let showArrow = true;

	const onClick = () => {
		open = !open;
		dispatch('open')
	}
	const onClose = () => {
		open = false;
		dispatch('close')
	}
	const bm = new BEM('UI-Dropdown', {
		[position]: !!position,
	});
	bm.append($$props.class);
</script>

<div class={bm.toString()} style={$$props.style} use:clickOutside on:outclick={onClose}>
	<div class="trigger" on:click={onClick}>
		<slot name="trigger"/>
	</div>
	{#if open}
		<DropdownMenu {showArrow} {position}>
			<slot></slot>
		</DropdownMenu>
	{/if}
</div>

<style lang='scss'>
	.UI-Dropdown {
		position: relative;

		:global(.UI-DropdownMenu) {
			position: absolute;
			top: 100%;
		}

	}

	.trigger {
		cursor: pointer;
	}

	.left {
		:global(.UI-DropdownMenu) {
			left: 0;
			right: initial;
		}
	}

	.right {
		:global(.UI-DropdownMenu) {
			right: 0;
			left: initial;
		}
	}
</style>
