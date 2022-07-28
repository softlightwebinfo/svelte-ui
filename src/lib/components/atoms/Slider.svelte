<script lang="ts">
	import { BEM } from "../../models/BEM";

	const bm = new BEM('UI-Slider')
	bm.append($$props.class)

	export let min = 0;
	export let max = 100;
	export let value = 0;
	let start = false;
	let width;

	const onMouseMove = ({x}) => {
		if (start) {
			value = ((max * (x - 7))) / width;
			if (value < min) value = min
			if (value > max) value = max;
		}
	}
	const onMouseStart = () => start = true;
	const onMouseEnd = () => start = false;
</script>
<svelte:window on:mouseup={onMouseEnd} on:mousemove={onMouseMove}/>
<div class="{bm.toString()}" bind:clientWidth={width}>
	<span class="range" style="width: {value}%;"></span>
	<span
		draggable
		on:mousedown={onMouseStart}
		class="handle"
		tabindex="0"
		role="slider"
		aria-valuemin="{min}"
		aria-valuemax="{max}"
		aria-orientation="horizontal" style="left: {value}%;"
	/>
</div>
<style lang="scss">
	div {
		background: #dee2e6;
		border: 0 none;
		border-radius: var(--ui-radius);
		height: 0.286rem;
		width: 100%;
		position: relative;
	}

	.range {
		position: absolute;
		display: block;
		background: var(--ui-primary);
		top: 0;
		left: 0;
		height: 100%;
	}

	.handle {
		height: 1.143rem;
		width: 1.143rem;
		background: #ffffff;
		border: 2px solid #6366F1;
		border-radius: 50%;
		transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
		cursor: grab;
		touch-action: none;
		display: block;
		position: absolute;
		top: 50%;
		margin-top: -0.5715rem;
		margin-left: -0.5715rem;
		z-index: 2;
		transition: none 0s ease 0s;
	}
</style>
