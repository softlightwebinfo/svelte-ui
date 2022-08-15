<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	export let flex = false;
	export let gap = 5;

	const bm = new BEM('UI-SurfaceSection');
	bm.append($$props.class);
</script>
<section class={bm.toString()} style:--ui-co-surface-section_gap="{gap}px" class:flex style={$$props.style}>
	<slot></slot>
</section>
<style lang='scss'>
	.UI-SurfaceSection {
		background-color: var(--ui-surface-section);
		position: relative;
		padding: var(--ui-margin);
	}

	.flex {
		display: flex;
		flex-direction: column;
		gap: var(--ui-co-surface-section_gap);
	}
</style>
