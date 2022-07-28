<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Avatar from '$lib/components/atoms/Avatar.svelte';
	import { themeColor } from '$lib/models/themeColor';
	import { themeSize } from '$lib/models/themeSize';
	import AvatarImage from '$lib/assets/avatar.jpeg';
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
		},
		size: {
			options: Object.keys(themeSize),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Avatar {...args} on:click={handleClick} label="p-{count}" />
</Template>

<Story name="Default" args={{ rounded: false }} />
<Story let:args name="Icon" args={{ rounded: false }}>
	<Avatar {...args}>
		<i class="fa fa-user" />
	</Avatar>
	<Avatar {...args}>
		<i class="fa fa-plus" />
	</Avatar>
	<Avatar {...args}>
		<i class="fa fa-home" />
	</Avatar>
</Story>

<Story name="Image" args={{ image: AvatarImage }} />
