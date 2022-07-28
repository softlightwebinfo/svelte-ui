<script lang="ts">
	import { key as keyData } from '$lib/context/accordion';
	import { createEventDispatcher, getContext } from 'svelte';
	import { slide } from 'svelte/transition';
	const dispatch = createEventDispatcher();
	const { set, data, multiple } = getContext(keyData);

	export let header: string = '';
	export let open = false;
	export let key: string = '';
	export let duration: number = 300;

	const onClick = () => {
		open = !open;
		dispatch('click', { open });
		set(key, open);
	};

	data.subscribe((i) => {
		if (!multiple) return;
		open = i == key;
	});
</script>

<div class="UI-AccordionItem" class:open>
	<header on:click={onClick}>
		<slot name="header">
			<i class="fa fa-chevron-{open ? 'down' : 'right'}" />{header}
		</slot>
	</header>
	{#if open}
		<section transition:slide={{ duration }}>
			<slot />
		</section>
	{/if}
</div>

<style lang="scss">
	header {
		cursor: pointer;
		display: flex;
		align-items: center;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		position: relative;
		text-decoration: none;
		padding: 1.25rem;
		border: 1px solid #dee2e6;
		color: #6c757d;
		background: #f8f9fa;
		font-weight: 700;
		border-radius: 6px;
	}
	.open {
		header {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}
	}
	section {
		padding: 1.25rem;
		border: 1px solid #dee2e6;
		background: #ffffff;
		color: #495057;
		border-top: 0;
		border-top-right-radius: 0;
		border-top-left-radius: 0;
		border-bottom-right-radius: 6px;
		border-bottom-left-radius: 6px;
	}
	i {
		margin-right: 10px;
	}
</style>
