<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Avatar from '$lib/components/atoms/Avatar.svelte';
	import { themeColor } from '$lib/models/themeColor';

	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<Meta
	title="Atoms/Avatar"
	component={Avatar}
	argTypes={{
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Avatar {...args} on:click={handleClick} label="p-{count}" />
</Template>

<Story name="Default" args={{ rounded: false }} />
