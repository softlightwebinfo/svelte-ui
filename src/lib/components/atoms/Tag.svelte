<script lang="ts">
	import type { TThemeColor } from '$lib/interfaces/TThemeColor';
	import { BEM } from '$lib/models/BEM';

	export let label: string = '';
	export let theme: TThemeColor = 'primary';
	export let icon: string = '';
	export let iconRight: string = '';
	export let rounded: boolean = false;
	const parent = new BEM('UI-Tag', {
		[theme]: !!theme
	});
</script>

<span class={parent.toString()} class:rounded on:click>
	{#if icon}
		<span class="icon">
			<slot name="icon">
				<i class={icon} />
			</slot>
		</span>
	{/if}
	<slot>
		{label}
	</slot>
	{#if iconRight}
		<span class="iconRight">
			<slot name="iconRight">
				<i class={iconRight} />
			</slot>
		</span>
	{/if}
</span>

<style lang="scss">
	.UI-Tag {
		font-size: 0.75rem;
		font-weight: 700;
		padding: 0.25rem 0.4rem;
		border-radius: 6px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.icon {
		margin-right: 0.25rem;
		font-size: 0.65rem;
	}

	.iconRight {
		margin-left: 0.25rem;
		font-size: 0.65rem;
	}

	.rounded {
		border-radius: 80px;
	}

	@include getThemeColors();
</style>
