<script lang="ts">
	export let right = false;
	export let left = false;
	export let center = false;
	export let spaceBetween = false;
	export let alignCenter = false;
	export let gap = 5;
</script>

<div class="Toolbar" style="--ui-co-toolbar_gap: {gap}px" class:alignCenter class:right class:left class:center
	 class:spaceBetween>
	<slot/>
</div>

<style lang="scss">
	div {
		display: flex;
		gap: var(--ui-co-toolbar_gap);
		flex-wrap: wrap;
		width: 100%;
	}
	.right {
		margin-left: auto;
	}
	.left {
		margin-right: auto;
	}
	.center {
		margin-left: auto;
		margin-right: auto;
	}
	.spaceBetween {
		justify-content: space-between;
	}
	.alignCenter {
		align-items: center;
	}
</style>
