<script lang="ts">
	export let top = true;
	export let bottom = false;
</script>

<div class="Sticky" class:top class:bottom>
	<slot />
</div>

<style lang="scss">
	.Sticky {
		position: sticky;
	}
	.top {
		top: var(--ui-co-sticky_position, 20px);
	}
	.bottom {
		bottom: var(--ui-co-sticky_position, 20px);
	}
</style>
