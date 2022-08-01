<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import type { TPosition } from "$lib/interfaces/TPosition";

	export let position: TPosition = 'up'
	export let color = 'white'
	export let border = 10;

	const bm = new BEM('UI-Arrow', {
		[position]: !!position,
	});
	bm.append($$props.class);
</script>
<div class={bm.toString()} style={$$props.style} style:--color="{color}" style:--border="{border}px"></div>
<style lang='scss'>
	.up {
		width: 0;
		height: 0;
		border-left: var(--border) solid transparent;
		border-right: var(--border) solid transparent;

		border-bottom: var(--border) solid var(--color);
	}

	.down {
		width: 0;
		height: 0;
		border-left: var(--border) solid transparent;
		border-right: var(--border) solid transparent;

		border-top: var(--border) solid var(--color);
	}

	.right {
		width: 0;
		height: 0;
		border-top: var(--border) solid transparent;
		border-bottom: var(--border) solid transparent;

		border-left: var(--border) solid var(--color);
	}

	.left {
		width: 0;
		height: 0;
		border-top: var(--border) solid transparent;
		border-bottom: var(--border) solid transparent;

		border-right: var(--border) solid var(--color);
	}
</style>
