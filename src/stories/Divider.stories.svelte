<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Avatar from '$lib/components/atoms/Avatar.svelte';
	import { themeColor } from '$lib/models/themeColor';
	import { themeSize } from '$lib/models/themeSize';
	import AvatarImage from '$lib/assets/avatar.jpeg';
	import Divider from "../lib/components/atoms/Divider.svelte";
</script>

<Meta
	title="Atoms/Divider"
	component={Divider}
	argTypes={{

	}}
/>

<Template let:args>
	<Divider {...args}/>
</Template>

<Story name="Default" args={{ rounded: false }}/>
