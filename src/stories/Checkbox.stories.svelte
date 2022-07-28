<script lang="ts">
	import Checkbox from './../lib/components/atoms/Checkbox.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Label from '$lib/components/atoms/Label.svelte';
</script>

<Meta title="Atoms/Inputs/Checkbox" component={Checkbox} argTypes={{}} />

<Template let:args>
	<Checkbox {...args} />
</Template>

<Story name="Default" args={{}} />
<Story name="Label" args={{}} let:args>
	<Checkbox {...args} >
		<Label component="span" label="Remember Me" />
	</Checkbox>
</Story>
