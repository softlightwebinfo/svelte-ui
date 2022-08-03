<script lang="ts">
	export let label = '';
	export let component = 'label';
</script>

<svelte:element this={component} on:click class="UI-Label">
	<slot/>
	{label}
</svelte:element>

<style lang="scss">
	.UI-Label {
		color: rgb(73, 80, 87);
		font-size: 14px;
		display: inline-flex;
		align-items: center;
		gap: 5px;
	}
</style>
