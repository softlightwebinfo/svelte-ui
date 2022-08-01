<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-SurfaceSection');
	bm.append($$props.class);
</script>
<section class={bm.toString()} style={$$props.style}>
	<slot></slot>
</section>
<style lang='scss'>
	.UI-SurfaceSection {
		background-color: var(--ui-surface-section);
		position: relative;
		padding: 2rem 5rem;
	}
</style>
