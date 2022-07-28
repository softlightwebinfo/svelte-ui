<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import ToggleButton from '$lib/components/molecules/ToggleButton.svelte';
</script>

<Meta title="Molecules/ToggleButton" component={ToggleButton} argTypes={{}} />

<Template let:args>
	<ToggleButton {...args} />
</Template>

<Story
	name="Default"
	args={{
		onIcon: 'fa fa-check',
		offIcon: 'fa fa-times',
		offLabel: 'Desactivado',
		onLabel: 'Activado'
	}}
/>
<Story
	name="Label"
	args={{
		offLabel: 'Desactivado',
		onLabel: 'Activado',
		checked: true
	}}
/>
