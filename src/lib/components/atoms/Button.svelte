<script lang="ts">
	import { classNames } from '$lib/functions/classNames';
	import type { TThemeColor } from '$lib/interfaces/TThemeColor';

	const [className] = classNames('Button');

	/**
	 * Rounded button
	 */
	export let rounded: boolean = false;
	/**
	 * Label text
	 */
	export let label: string = '';
	export let disabled: boolean = false;
	export let isIcon: boolean = false;
	export let theme: TThemeColor = '';
	export let raised: boolean = false;
	$: noLabel = !label && !$$slots.default && !$$slots.left && !$$slots.right;
</script>

<button
	class={[className, theme, $$props.class].join(' ')}
	class:rounded
	on:click
	{disabled}
	class:noLabel
	class:iconLeft={!!$$slots.left}
	class:iconRight={!!$$slots.right}
	class:isIcon
	class:raised
	style={$$props.style}
>
	{#if $$slots.left}
		<div class="left">
			<slot name="left" />
		</div>
	{/if}
	<slot>
		<span>{label}</span>
	</slot>
	{#if $$slots.right}
		<div class="right">
			<slot name="right" />
		</div>
	{/if}
</button>

<style lang="scss">
	@import '../../scss/mixins.scss';
	
	[disabled] {
		opacity: 0.6;
	}
	button {
		height: var(--ui-button_size-height, 33px);
		min-width: var(--ui-button_size-min-width, 33px);
		width: var(--ui-button_size-width, auto);
		display: inline-flex;
		align-items: center;
		position: relative;
		padding: 0;
		margin-right: 0.1em;
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
	}
	span {
		display: block;
		line-height: normal;
		padding: 0.5rem 1rem;
	}
	.left {
		padding-left: 10px;
	}
	.iconLeft {
		span {
			padding-left: 5px;
		}
	}
	.iconRight {
		span {
			padding-right: 5px;
		}
	}
	.right {
		padding-right: 10px;
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
