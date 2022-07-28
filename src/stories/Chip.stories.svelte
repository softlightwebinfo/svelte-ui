<script lang="ts">
	import Chip from './../lib/components/atoms/Chip.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { themeColor } from '$lib/models/themeColor';
</script>

<Meta
	title="Atoms/Chip"
	component={Chip}
	argTypes={{
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Chip {...args} />
</Template>

<Story
	name="Default"
	args={{
		label: 'Triller'
	}}
/>
