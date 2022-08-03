<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-Title');
	bm.append($$props.class);
	export let tag = 'div'
	export let title = '';
	export let margin = true;
</script>
<svelte:element this="{tag}" class={bm.toString()} class:margin style={$$props.style}>
	<slot>
		{title}
	</slot>
</svelte:element>
<style lang='scss'>
	.UI-Title {
		color: var(--ui-title-color);
		font-size: var(--ui-title-font-size);
		font-weight: var(--ui-title-font-weight);
	}

	.margin {
		margin-bottom: var(--ui-margin);
	}
</style>
