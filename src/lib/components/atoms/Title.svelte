<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-Title');
	bm.append($$props.class);
	export let tag = 'div'
	export let title = '';
</script>
<svelte:element this="{tag}" class={bm.toString()} style={$$props.style}>
	<slot>
		{title}
	</slot>
</svelte:element>
<style lang='scss'>
	.UI-Title {
		margin-bottom: 1rem;
		color: var(--ui-title-color);
		font-size: var(--ui-title-font-size);
		font-weight: var(--ui-title-font-weight);
	}
</style>
