<script lang="ts">
	export let right = false;
	export let left = false;
	export let center = false;
	export let spaceBetween = false;
	export let alignCenter = false;
</script>

<div class="Toolbar" class:alignCenter class:right class:left class:center class:spaceBetween>
	<slot />
</div>

<style lang="scss">
	div {
		display: flex;
		gap: 5px;
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
