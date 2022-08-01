<script lang="ts">
	import { classNames } from '$lib/functions/classNames';
	import type { TSize } from '$lib/interfaces/TSize';
	import type { TThemeColor } from '$lib/interfaces/TThemeColor';

	const [className] = classNames('Avatar');
	export let label = '';
	export let theme: TThemeColor = 'default';
	export let size: TSize = 'md';
	export let rounded = false;
	export let image = '';
	export let big = false;
</script>

<div class={[className, theme, size].join(' ')} class:noLabel={!label} class:rounded on:click class:big>
	<slot>
		{#if !image && label}
			<span>{label}</span>
		{/if}
		{#if image}
			<img src={image} alt={label} title={label}/>
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

	.xxl {
		$s: 5rem;
		width: $s;
		height: $s;
		font-size: 2rem;

		&.big {
			$s: $s*2;
			width: $s;
			height: $s;
		}
	}

	.xl {
		$s: 4rem;
		width: $s;
		height: $s;
		font-size: 2rem;

		&.big {
			$s: $s*2;
			width: $s;
			height: $s;
		}
	}

	.lg {
		$s: 3rem;
		width: $s;
		height: $s;
		font-size: 1.5rem;

		&.big {
			$s: $s*2;
			width: $s;
			height: $s;
		}
	}
	.md {
		$s: 2rem;
		width: $s;
		height: $s;
		font-size: 1rem;

		&.big {
			$s: $s*2;
			width: $s;
			height: $s;
		}
	}
	@include getThemeColors();
</style>
