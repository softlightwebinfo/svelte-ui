<script lang="ts">
	import { classNames } from '$lib/functions/classNames';

	const [className] = classNames('Avatar');
	export let label: string = '';
</script>

<div class={className} class:noLabel={!label}>
	<slot>
		<span>{label}</span>
	</slot>
</div>

<style lang="scss">
	div {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		font-size: 1rem;
		border-radius: var(--ui-border-default);
	}
	.noLabel span {
		display: none;
	}
</style>
