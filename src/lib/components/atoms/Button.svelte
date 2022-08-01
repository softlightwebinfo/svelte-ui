<script lang="ts">
	import { classNames } from '$lib/functions/classNames';
	import type { TThemeColor } from '$lib/interfaces/TThemeColor';
	import type { TSize } from "../../interfaces/TSize";

	const [className] = classNames('Button');

	/**
	 * Rounded button
	 */
	export let rounded = false;
	export let icon = '';
	export let iconRight = '';
	/**
	 * Label text
	 */
	export let label = '';
	export let disabled = false;
	export let isIcon = false;
	export let theme: TThemeColor = '';
	export let raised = false;
	export let size: TSize = 'md'
	$: noLabel = !label && !$$slots.default && !$$slots.left && !$$slots.right;
</script>

<button
	class={[className, theme, $$props.class, size].join(' ')}
	class:rounded
	on:click
	{disabled}
	class:noLabel
	class:iconLeft={!icon && !!$$slots.left}
	class:iconRight={!icon && !!$$slots.right}
	class:isIcon
	class:raised
	style={$$props.style}
>
	{#if !!icon || $$slots.left}
		<div class="left">
			{#if $$slots.left}
				<slot name="left" />
			{:else}
				<i class={icon} />
			{/if}
		</div>
	{/if}
	<slot>
		<span>{label}</span>
	</slot>
	{#if !!iconRight || $$slots.right}
		<div class="right">
			{#if $$slots.right}
				<slot name="right" />
			{:else}
				<i class={iconRight} />
			{/if}
		</div>
	{/if}
</button>

<style lang="scss">
	// @import '../../scss/mixins';

	[disabled] {
		opacity: 0.6;
	}

	button {
		height: var(--ui-button_size-height, 33px);
		min-width: var(--ui-button_size-min-width, 33px);
		width: var(--ui-button_size-width, auto);
		position: relative;
		text-decoration: none;
		cursor: pointer;
		text-align: center;
		color: var(--ui-theme-secondary);
		background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
		margin: 0;
		border: 0;
		outline: 0 none;
		border-radius: var(--ui-border-default);
		transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
		padding: 0 15px;
		display: inline-flex;
		align-items: center;
		gap: 8px;

		i,
		:global(i) {
			color: inherit;
		}

		&:focus {
			box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #b1b3f8, 0 1px 2px 0 black;
			outline: 0 none;
			outline-offset: 0;
		}
	}
	span {
		display: block;
		line-height: normal;
		padding: 0.5rem 1rem;
	}

	.rounded {
		border-radius: 2rem;
	}

	.noLabel {
		.left,
		.right {
			padding: 0;
		}
		span {
			display: none;
		}
	}
	.raised {
		box-shadow: var(--ui-raised);
	}
	.isIcon {
		justify-content: center;
		--ui-button_size-width: 33px;
		--ui-button_size-height: 33px;
	}

	@include getThemeColors();
</style>
