<script lang="ts">
	import { BEM } from '$lib/models/BEM';

	const bem = new BEM('UI-Card');
	bem.append($$props.class);
	export let inline = false
	export let marginBottom = false;
</script>

<div class={bem.toString()} style={$$props.style} class:inline class:marginBottom>
	<slot/>
</div>

<style lang="scss">
	div {
		background: var(--ui-white);
		color: #495057;
		box-shadow: var(--ui-raised);
		border-radius: 6px;
	}

	.inline {
		display: inline-flex;
		overflow: hidden;
	}

	.marginBottom {
		margin-bottom: var(--ui-margin);
	}
</style>
