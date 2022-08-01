<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-Group');
	bm.append($$props.class);
	export let gap = 5;
	export let directionColumn: false;
	export let spaceBetween: false;
	export let top: false;
</script>
<div class={bm.toString()} style={$$props.style} style:--gap="{gap}px" class:directionColumn class:spaceBetween
	 class:top>
	<slot/>
</div>
<style lang='scss'>
	.UI-Group {
		display: flex;
		gap: var(--gap);
		align-items: center;
	}

	.directionColumn {
		flex-direction: column;
	}

	.spaceBetween {
		justify-content: space-between;
	}

	.top {
		align-items: flex-start;
	}
</style>
