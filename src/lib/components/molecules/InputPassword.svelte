<script lang="ts">
	import FloatIcon from '../atoms/FloatIcon.svelte';
	import Input from '../atoms/Input.svelte';

	export let value = '';
	export let placeholder = '';
	export let disabled = false;
	export let show = false;
	export let name = '';
	const onClick = () => {
		show = !show;
	};
</script>

<FloatIcon on:click={onClick} iconRight="fa fa-{show ? 'eye-slash' : 'eye'}">
	<Input bind:value {disabled} {name} {placeholder} type={show ? 'text' : 'password'}/>
</FloatIcon>

<style lang="scss">
</style>
