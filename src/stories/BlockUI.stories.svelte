<script lang="ts">
	import BlockUI from './../lib/components/atoms/BlockUI.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '$lib/components/atoms/Button.svelte';
	let blocked = false;
</script>

<Meta title="Atoms/BlockUI" component={BlockUI} argTypes={{}} />

<Template let:args>
	<div>
		<Button label="Toggle {blocked}" on:click={() => (blocked = !blocked)} />
	</div>
	<BlockUI {...args} {blocked}>
		<section>Hello world</section>
	</BlockUI>
</Template>

<Story name="Default" args={{ blocked }} />

<style lang="scss">
	section {
		min-height: 300px;
		background: white;
		border: 1px dashed;
	}
</style>
