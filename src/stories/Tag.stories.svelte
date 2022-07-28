<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Tag from '$lib/components/atoms/Tag.svelte';
	import { themeColor } from '$lib/models/themeColor';
</script>

<Meta
	title="Atoms/Tag"
	component={Tag}
	argTypes={{
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Tag {...args} />
</Template>

<Story name="Default" args={{ label: 'Primary' }} />
