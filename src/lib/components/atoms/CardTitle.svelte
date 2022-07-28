<script lang="ts">
	let tag: string = 'h3';
</script>

<svelte:element this={tag} class="CardTitle">
	<slot />
</svelte:element>

<style lang="scss">
	.CardTitle {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}
</style>
