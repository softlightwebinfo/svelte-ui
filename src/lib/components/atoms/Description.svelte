<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-Description');
	bm.append($$props.class);
	export let description = '';
</script>
<p class={bm.toString()} style={$$props.style}>
	<slot>
		{description}
	</slot>
</p>
<style lang='scss'>
	.UI-Description {
		color: var(--ui-text-color);
		font-size: var(--ui-text-font-size);
		line-height: 24px;
	}
</style>
