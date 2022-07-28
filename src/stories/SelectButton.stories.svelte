<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import SelectButton from '$lib/components/molecules/SelectButton.svelte';
	const paymentOptions = [
		{ label: 'Option 1', icon: 'fa fa-home', value: 1 },
		{ label: 'Option 2', icon: 'fa fa-home', value: 2 },
		{ label: 'Option 3', icon: 'fa fa-home', value: 3 }
	];
</script>

<Meta title="Molecules/SelectButton" component={SelectButton} />

<Template let:args>
	<SelectButton {...args} />
</Template>

<Story name="Default" args={{ options: paymentOptions }} />
