<script lang="ts">
	import { BEM } from "../../models/BEM";
	import Portal from "./Portal.svelte";
	import { fade } from "svelte/transition";

	const bm = new BEM('UI-Overlay')
	bm.append($$props.class)
	export let show: boolean = false;
	export let duration = 300;
</script>
{#if show}
	<Portal>
		<div transition:fade={{duration}} class="{bm.toString()}" style="{$$props.style}" class:show on:click>
			<slot/>
		</div>
	</Portal>
{/if}
<style lang='scss'>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: none;
		justify-content: center;
		align-items: center;
		pointer-events: none;
		transition-property: background-color;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 9;
	}

	.show {
		display: flex;
	}
</style>
