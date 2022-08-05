<script lang="ts">
	export let value = '';
	export let name = '';
	export let id = '';
	export let cols = 30;
	export let rows = 10;
	export let disabled = false;
	export let placeholder = '';
</script>

<textarea {name} {id} {cols} {rows} bind:value on:change on:click on:blur on:focus {disabled} {placeholder}></textarea>

<style lang="scss">
	textarea {
		@include getField();
        padding: 10px;
	}
</style>
