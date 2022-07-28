<script lang="ts">
	export let show: boolean = true;
</script>

{#if show}
	<div class="UI-MenuAtom" style={$$props.style}>
		<slot />
	</div>
{/if}

<style lang="scss">
	div {
		// padding: 0.25rem 0;
		background: var(--ui-white);
		color: #495057;
		border: 1px solid #dee2e6;
		border-radius: 6px;
		width: 15rem;
	}
</style>
