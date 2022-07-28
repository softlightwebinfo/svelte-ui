<script lang="ts">
	import { themeColor } from '$lib/models/themeColor';
	import Switch from './../lib/components/atoms/Switch.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { inputType } from '$lib/models/inputType';
</script>

<Meta
	title="Atoms/Inputs/Switch"
	component={Switch}
	argTypes={{
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Switch {...args} />
</Template>

<Story name="Default" args={{}} />
