<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import Closeable from "./Closeable.svelte";
	import type { TThemeColor } from "../../interfaces/TThemeColor";
	import { createEventDispatcher } from "svelte";
	import { fade } from "svelte/transition";

	const dispatch = createEventDispatcher();

	export let theme: TThemeColor = "secondary"
	export let isCloseable = false;
	export let showIcon = true;
	export let customIcon = '';
	export let description = ''
	export let message = '';
	export let timeout: number = null;
	export let inline = false;

	$: bm = new BEM('UI-Alert', {
		[theme]: !!theme
	}, $$props.class);

	$:icon = () => {
		if (customIcon) return customIcon;
		switch (theme) {
			case "success":
				return "fa fa-check";
			case "info":
				return 'fa fa-info';
			case "warning":
				return 'fa fa-warning';
			case 'danger':
				return 'fa fa-times';
		}
		return 'fa fa-envelope'
	}

	const onClose = () => dispatch("close")

	if (timeout && isCloseable) {
		setTimeout(onClose, timeout);
	}

</script>
<div
	in:fade
	out:fade
	on:click
	class={bm.toString()}
	style={$$props.style}
	class:isDescription={!!description}
	class:inline
>
	<div class="wrapper">
		{#if showIcon}
			<span class="icon">
				<i class="{icon()}"></i>
			</span>
		{/if}
		<span class="detail">
			<slot>{message}</slot>
		</span>
		{#if isCloseable}
			<Closeable on:click={onClose}/>
		{/if}
	</div>
	{#if description}
		<div class="description">{description}</div>
	{/if}
</div>
<style lang='scss'>
	.UI-Alert {
		margin-bottom: var(--ui-margin);
		border-radius: var(--ui-radius);
		pointer-events: all;
	}

	.wrapper {
		display: flex;
		align-items: center;
		padding: 1.25rem 1.75rem;
		gap: 10px;
	}

	i {
		font-size: 15px;
		color: inherit;
	}

	.description {
		padding-left: 1.75rem;
		padding-bottom: 1.25rem;
		padding-top: .5rem;
		color: var(--ui-text-color);
	}

	.isDescription .wrapper {
		padding-bottom: 0;
	}

	.detail {
		flex: 1;
		font-size: var(--ui-text-font-size);
	}

	.icon {
		display: inline-flex;
	}

	@each $name, $color in $colors {
		.#{$name} {
			background: whitesmoke;
			color: $color;
			border: 1px solid $color;
			border-left: 6px solid $color;
		}
	}

	.inline {
		border: 0;
		display: inline-flex;
		@include getThemeColorsInclude(true, false);

		.wrapper {
			padding: .5rem;
		}

		.detail {
			font-size: calc(var(--ui-text-font-size) - 4px);
		}

		&.white,
		&.default {
			color: black;
		}
	}

</style>
