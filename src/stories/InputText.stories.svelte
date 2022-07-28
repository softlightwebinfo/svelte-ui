<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Input from '$lib/components/atoms/Input.svelte';
	import { inputType } from '$lib/models/inputType';
	import FloatIcon from '$lib/components/atoms/FloatIcon.svelte';
</script>

<Meta
	title="Atoms/Inputs/Input"
	component={Input}
	argTypes={{
		type: {
			options: Object.keys(inputType),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Input {...args} />
</Template>

<Story name="Default" args={{}} />
<Story name="Icon" args={{}} let:args>
	<FloatIcon icon="fa fa-search" iconRight="fa fa-home">
		<Input {...args} />
	</FloatIcon>
</Story>
<Story name="Size" args={{ size: 'lg' }} />
