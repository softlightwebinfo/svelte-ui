<script lang="ts">
	import type { TSize } from '$lib/interfaces/TSize';

	import type { TThemeColor } from '$lib/interfaces/TThemeColor';
	import { BEM } from '$lib/models/BEM';

	export let value: string | number = '';
	export let theme: TThemeColor = 'primary';
	export let size: TSize = 'md';
	export let max: number | null = null;
	const parent = new BEM('UI-Badge', {
		[theme]: !!theme,
		[size]: !!size
	});
</script>

<span class={parent.toString()} on:click>
	<slot>
		{#if max && max < value}
			+ {max}
		{:else}
			{value}
		{/if}
	</slot>
</span>

<style lang="scss">
	span {
		font-weight: 700;
		text-align: center;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		padding: 0;
		display: inline-block;
		border-radius: 10px;
		text-align: center;
		padding: 0 0.5rem;
	}
	.md {
		font-size: 0.75rem;
		min-width: 1.5rem;
		height: 1.5rem;
		line-height: 1.5rem;
	}

	.lg {
		font-size: 1.125rem;
		min-width: 2.25rem;
		height: 2.25rem;
		line-height: 2.25rem;
	}
	.xl {
		font-size: 1.5rem;
		min-width: 3rem;
		height: 3rem;
		line-height: 3rem;
	}
	@include getThemeColors();
</style>
