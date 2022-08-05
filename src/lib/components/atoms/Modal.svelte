<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import { createEventDispatcher, onDestroy } from 'svelte';
	import Overlay from "./Overlay.svelte";
	import TitleDescription from "../molecules/TitleDescription.svelte";
	import Closeable from "./Closeable.svelte";
	import { fly } from "svelte/transition";

	const bm = new BEM('UI-Modal');
	bm.append($$props.class);

	const dispatch = createEventDispatcher();

	let modal;
	export let show = false;
	export let title = '';
	export let description = '';
	export let autoClose = true;
	export let width = '';
	export let duration = 1000;

	const close = () => {
		if (autoClose) {
			show = false;
		}

		dispatch('close')
	};
	const handle_keydown = e => {
		if (e.key === 'Escape') {
			close();
			return;
		}
	};

	const previously_focused = typeof document !== 'undefined' && document.activeElement;

	if (previously_focused) {
		onDestroy(() => {
			previously_focused.focus();
		});
	}
</script>

<svelte:window on:keydown={handle_keydown}/>
<Overlay bind:show>
	<div
		transition:fly={{duration, x:0, y: -100}}
		style:--ui-co-modal_width="{width}"
		class={bm.toString()} style={$$props.style}
		bind:this={modal} role="dialog"
		aria-modal="true"
	>
		{#if $$slots.header || title}
			<header>
				<slot name="header">
					<TitleDescription {title} {description}/>
				</slot>
				<Closeable on:click={close}/>
			</header>
		{/if}
		<section>
			<slot></slot>
		</section>
		{#if $$slots.footer}
			<footer>
				<slot name="footer"></slot>
			</footer>
		{/if}
	</div>
</Overlay>
<style lang='scss'>
	.UI-Modal {
		border-radius: var(--ui-co-modal_radius, var(--ui-radius));
		box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
		border: 0 none;
		display: flex;
		flex-direction: column;
		max-height: 90%;
		max-width: var(--ui-co-modal_width, 600px);
		width: 100%;
		position: relative;
		pointer-events: all;
		@media (max-width: 500px) {
			width: 100%;
			max-width: 100%;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			max-height: 100%;
			--ui-co-modal_radius: 0;
		}
	}

	header {
		display: flex;
		align-items: center;
		flex-shrink: 0;
		border-bottom: 0 none;
		background: var(--ui-white);
		color: #343a40;
		padding: 1.5rem;
		border-top-right-radius: var(--ui-co-modal_radius, var(--ui-radius));;
		border-top-left-radius: var(--ui-co-modal_radius, var(--ui-radius));;
		justify-content: space-between;

		:global {
			.UI-TitleDescription {
				margin: 0;

				.UI-Title {
					margin: 0;
				}
			}
		}
	}

	section {
		background: var(--ui-white);
		overflow-y: auto;
		flex-grow: 1;
		color: #495057;
		padding: 0 1.5rem 2rem 1.5rem;
	}

	footer {
		border-top: 0 none;
		background: var(--ui-white);
		flex-shrink: 0;
		color: #495057;
		padding: 0 1.5rem 1.5rem 1.5rem;
		text-align: right;
		border-bottom-right-radius: var(--ui-co-modal_radius, var(--ui-radius));
		border-bottom-left-radius: var(--ui-co-modal_radius, var(--ui-radius));
	}
</style>
