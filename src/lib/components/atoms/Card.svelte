<script lang="ts">
	import { BEM } from '$lib/models/BEM';

	const bem = new BEM('UI-Card');
	bem.append($$props.class);
</script>

<div class={bem.toString()} style={$$props.style}>
	<slot />
</div>

<style lang="scss">
	div {
		background: var(--ui-white);
		color: #495057;
		box-shadow: var(--ui-raised);
		border-radius: 6px;
	}
</style>
