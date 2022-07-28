<script lang="ts">
	import { classNames } from '$lib/functions/classNames';
	import type { TSize } from '$lib/interfaces/TSize';
	import type { TThemeColor } from '$lib/interfaces/TThemeColor';

	const [className] = classNames('Avatar');
	export let label: string = '';
	export let theme: TThemeColor = 'default';
	export let size: TSize = 'md';
	export let rounded: boolean = false;
	export let image: string = '';
</script>

<div class={[className, theme, size].join(' ')} class:noLabel={!label} class:rounded on:click>
	<slot>
		{#if !image && label}
			<span>{label}</span>
		{/if}
		{#if image}
			<img src={image} alt={label} title={label} />
		{/if}
	</slot>
</div>

<style lang="scss">
	div {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;

		img,
		& {
			border-radius: var(--ui-border-default);
		}
	}
	img {
		width: 100%;
		height: 100%;
	}
	.noLabel span {
		display: none;
	}
	.rounded {
		img,
		& {
			border-radius: 100%;
		}
	}
	.xl {
		width: 4rem;
		height: 4rem;
		font-size: 2rem;
	}
	.lg {
		width: 3rem;
		height: 3rem;
		font-size: 1.5rem;
	}
	.md {
		width: 2rem;
		height: 2rem;
		font-size: 1rem;
	}
	@include getThemeColors();
</style>
