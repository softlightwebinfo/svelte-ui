<script lang="ts">
	import type { TType } from '$lib/interfaces/TTypes';
	import { BEM } from "../../models/BEM";

	export let theme: TType = 'default';
	const bm = new BEM('UI-Rounded', {[theme]: !!theme,})
	bm.append($$props.class)
</script>

<span on:click class="{bm.toString()}"></span>

<style lang="scss">
	.UI-Rounded {
		$sz: 0.75rem;
		--bs-bg-opacity: 1;
		background-color: rgba(239, 68, 68, 1);
		border-radius: 9999px;
		display: inline-flex;
		height: $sz;
		width: $sz;

		&:hover {
			cursor: pointer;
		}
	}

	@include getThemeColors();
</style>
