<script lang="ts">
	export let value: string = '';
	export let name: string = '';
	export let id: string = '';
	export let cols: number = 30;
	export let rows: number = 10;
	export let disabled: boolean = false;
	export let placeholder: string = '';
</script>

<textarea {name} {id} {cols} {rows} {value} {disabled} {placeholder} />

<style lang="scss">
	textarea {
		@include getField();
        padding: 10px;
	}
</style>
