<script lang="ts">
	import type { TThemeColor } from '$lib/interfaces/TThemeColor';
	import { BEM } from '$lib/models/BEM';

	export let theme: TThemeColor = '';
	export let isMenu: boolean = false;
	export let isFixed: boolean = false;
	const bm = new BEM('UI-Navbar', {
		[theme]: !!theme
	});
	bm.append($$props.class);
</script>

<header class={bm.toString()} class:isMenu class:isFixed>
	<slot />
</header>

<style lang="scss">
	header {
		padding: 0.5rem;
		background: var(--ui-co-navbar);
		color: #495057;
		border: 1px solid #dee2e6;
		border-radius: var(--ui-co-navbar_radius, 6px);
		display: flex;
		align-items: center;
	}
	@include getThemeColors();
	.isMenu {
		--ui-co-navbar_radius: 0;
	}
	.isFixed {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
</style>
