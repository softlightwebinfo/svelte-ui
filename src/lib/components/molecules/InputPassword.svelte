<script lang="ts">
	import FloatIcon from '../atoms/FloatIcon.svelte';
	import Input from '../atoms/Input.svelte';
	export let value: string = '';
	export let placeholder: string = '';
	export let disabled: boolean = false;
	export let show: boolean = false;
	const onClick = () => {
		show = !show;
	};
</script>

<FloatIcon on:click={onClick} iconRight="fa fa-{show ? 'eye-slash' : 'eye'}">
	<Input type={show ? 'text' : 'password'} bind:value {placeholder} {disabled} />
</FloatIcon>

<style lang="scss">
</style>
