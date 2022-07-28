<script lang="ts">
</script>

<span class="UI-OverlayBadge">
	<slot />
</span>

<style lang="scss">
	:global(.UI-OverlayBadge) {
		position: relative;
		display: inline-block;
		:global(.UI-Badge) {
			position: absolute;
			top: -10px;
			right: -10px;
			transform-origin: 100% 0;
			margin: 0;
		}
	}
</style>
