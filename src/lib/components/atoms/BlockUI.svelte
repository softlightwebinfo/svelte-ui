<script lang="ts">
	export let blocked: boolean = false;
	export let fullScreen: boolean = false;
</script>

{#if blocked}
	<div class="UI-BlockUI" class:fullScreen>
		<slot />
		<i class="fa fa-lock" />
	</div>
{:else}
	<slot />
{/if}

<style lang="scss">
	div {
		position: relative;
		transition-duration: 0.2s;
		user-select: none;
		pointer-events: none;
		&::after {
			content: '';
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: rgba(0, 0, 0, 0.4);
			position: absolute;
			height: 100%;
			width: 100%;
			user-select: none;
			pointer-events: none;
		}
	}
	i {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		font-size: 2em;
		display: flex;
		margin: auto;
		justify-content: center;
		align-items: center;
	}
	.fullScreen {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
