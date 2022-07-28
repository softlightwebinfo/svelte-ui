<script lang="ts">
	import WindowHeader from './WindowHeader.svelte';
	import { BEM } from "../../models/BEM";

	export let title = '';
	const bm = new BEM('UI-Window')
	bm.append($$props.class)
</script>

<div class="{bm.toString()}" style={$$props.style}>
	<WindowHeader {title} on:close on:maximize on:minimize />
	<div class="UI-Window__content">
		<slot />
	</div>
</div>

<style lang="scss">
	.UI-Window {
		background-color: rgba(17, 24, 39, 1);
		border-radius: 0.5rem;
		box-shadow: var(--ui-raised);
		color: rgba(156, 163, 175, 1);

		&__content {
			padding: 0 1rem 1rem;
		}
	}
</style>
