<script lang="ts">
	import Label from './Label.svelte';
	export let label: string = null;
</script>

<div class="UI-FormGroup">
	{#if label}
		<Label>{label}</Label>
	{/if}
	<slot />
</div>

<style lang="scss">
	div {
		display: block;
		width: 100%;
		margin-bottom: 10px;

		> :global {
			.UI-Label {
				margin-bottom: 5px;
				font-weight: bold;
			}
		}
	}
</style>
