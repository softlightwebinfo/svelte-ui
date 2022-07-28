<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Navbar from '$lib/components/atoms/Navbar.svelte';
	import { themeColor } from '$lib/models/themeColor';
</script>

<Meta
	title="Atoms/Navbar"
	component={Navbar}
	argTypes={{
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Navbar {...args}>Hello world</Navbar>
</Template>

<Story name="Default" args={{}} />
