<script lang="ts">
	import { BEM } from '$lib/models/BEM';
	export let icon: string = '';
	export let iconRight: string = '';
	export let start: boolean = false;
	const bm = new BEM('UI-FloatIcon');
	bm.append($$props.class);
</script>

<div class={bm.toString()} class:isIconRight={!!iconRight} class:start>
	{#if icon}
		<span class="icon" on:click>
			<slot name="icon">
				<i class={icon} />
			</slot>
		</span>
	{/if}
	<slot />
	{#if iconRight}
		<span class="iconRight" on:click>
			<slot name="iconRight">
				<i class={iconRight} />
			</slot>
		</span>
	{/if}
</div>

<style lang="scss">
	.UI-FloatIcon {
		position: relative;
		display: block;
		.icon + :global(*) {
			padding-left: 2.5rem;
		}
	}
	.isIconRight {
		.icon + :global(*) {
			padding-right: 2.5rem;
		}
	}
	.icon,
	.iconRight {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0.75rem;
		color: #6c757d;
		display: flex;
		align-items: center;
		padding: 0;
		margin: 0;
	}
	.iconRight {
		right: 0.75rem;
		left: initial;
	}
	.start {
		.icon,
		.iconRight {
			top: 0.9rem;
			bottom: initial;
		}
	}
</style>
