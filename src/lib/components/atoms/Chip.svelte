<script lang="ts">
	import { BEM } from '$lib/models/BEM';

	import { createEventDispatcher } from 'svelte';
	import type { TThemeColor } from '$lib/interfaces/TThemeColor.js';
	import type { TSize } from '$lib/interfaces/TSize';

	export let label: string = '';
	export let icon: string = '';
	export let image: string = '';
	export let removable: boolean = false;
	export let removeIcon: string = '';
	export let imageAlt: string = '';
	export let theme: TThemeColor = '';
	export let size: TSize = 'md';

	const dispatch = createEventDispatcher();
	const onRemovable = (e: any) => dispatch('delete', e);
	const parent = new BEM('UI-Chip', {
		[theme]: !!theme,
		[size]: !!size
	});
</script>

<div class={parent.toString()} on:click>
	{#if icon && !image}
		<span class="icon">
			<slot name="icon">
				<i class={icon} />
			</slot>
		</span>
	{:else if image}
		<img src={image} class="image" alt={imageAlt} title={imageAlt} />
	{/if}
	<span class="label">
		<slot>
			{label}
		</slot>
	</span>
	{#if removable}
		<span class="iconRight" on:click|stopPropagation={onRemovable}>
			<slot name="iconRight">
				<i class={removeIcon ? removeIcon : 'fa fa-times'} />
			</slot>
		</span>
	{/if}
</div>

<style lang="scss">
	div {
		display: inline-flex;
		align-items: center;
		background-color: #dee2e6;
		color: #495057;
		border-radius: 16px;
		padding: 0 0.75rem;
	}
	.iconRight {
		border-radius: 6px;
		transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
		margin-left: 0.5rem;
        cursor: pointer;
	}
	.icon,
	.image {
		margin-right: 0.5rem;
	}
	.image {
		width: 2.25rem;
		height: 2.25rem;
		margin-left: -0.75rem;
		margin-right: 0.5rem;
		border-radius: 50%;
	}
	.label {
		line-height: 1.5;
		margin-top: 0.375rem;
		margin-bottom: 0.375rem;
	}
	@include getThemeColors();
</style>
