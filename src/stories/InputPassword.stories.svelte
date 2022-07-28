<script lang="ts">
	import InputPassword from './../lib/components/molecules/InputPassword.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { themeSize } from '$lib/models/themeSize';
</script>

<Meta
	title="Molecules/Inputs/Password"
	component={InputPassword}
	argTypes={{
		size: {
			options: Object.keys(themeSize),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<InputPassword {...args} />
</Template>

<Story name="Default" args={{ placeholder: 'Write your password' }} />
