<script lang="ts">
	import Sidebar from "../atoms/Sidebar.svelte";
	import Overlay from "../atoms/Overlay.svelte";
	import { BEM } from "../../models/BEM";

	export let show = false
	export let position: 'left' | 'right' | 'up' | 'bottom' = 'left'

	const bm = new BEM('UI-Flyout', {
		[position]: !!position,
	})
	bm.append($$props.class)
	const onClose = () => show = false;
</script>
<Overlay class="{bm.toString()}" style="{$$props.style}" {show}>
	<Sidebar open={show} on:close={onClose}>
		<slot></slot>
	</Sidebar>
</Overlay>
<style lang='scss'>
	:global(.UI-Flyout) {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		background-color: transparent;
		transition-property: background-color;
	}

	:global(.UI-Flyout.left) {
		justify-content: flex-start;
	}

	:global(.UI-Flyout.right) {
		justify-content: flex-end;
	}

	:global(.UI-Flyout.up) {
		justify-content: flex-start;
	}

	:global(.UI-Flyout.bottom) {
		justify-content: flex-start;
	}
</style>
