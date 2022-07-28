<script lang="ts">
	export let active = false;
</script>

<div on:click class="UI-Item" class:active style="{$$props.style}">
	<slot/>
</div>

<style lang="scss">
	div {
		transition: all 0.3s ease-in-out;
		padding: 10px 20px;
		border-radius: var(--ui-radius);
		border: 1px solid transparent;

		&:hover {
			background: whitesmoke;
			cursor: pointer;
		}
	}

	.active {
		background: whitesmoke;
	}
</style>
