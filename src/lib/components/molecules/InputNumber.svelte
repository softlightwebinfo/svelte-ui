<script lang="ts">
	import Input from '$lib/components/atoms/Input.svelte';
	export let value: string = '';
	export let previousN = value;
	export let disabled: boolean = false;
	export let placeholder: string = '';
	export let readonly: boolean = false;
	export let min: number | null;
	export let max: number | null;
	export let prev: string;
	export let isFormat: boolean = true;
	$: {
		value = value.replace(/\./g, '');

		function test() {
			if (isNaN(value)) return false;

			if (!isFormat) {
				value = value.trim();
				return true;
			}

			if (min && Number(value) < min) {
				value = prev;
				return false;
			}
			if (max && Number(value) > max) {
				value = prev;
				return false;
			}
			value = value
				.toString()
				.split('')
				.reverse()
				.join('')
				.replace(/(?=\d*\.?)(\d{3})/g, '$1.');
			value = value.split('').reverse().join('').replace(/^[\.]/, '');
			prev = value;
			return true;
		}

		if (!test()) {
			value = prev;
		}
	}
</script>

<Input type="text" {placeholder} {disabled} {readonly} bind:value />

<style lang="scss">
</style>
