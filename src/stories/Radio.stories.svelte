<script lang="ts">
	import Radio from '$lib/components/atoms/Radio.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import { themeSize } from '$lib/models/themeSize';
	import { themeColor } from '$lib/models/themeColor';
	import Label from "$lib/components/atoms/Label.svelte";

	export let group = "2";
	export let yes = 2;
</script>

<Meta
	title="Atoms/Inputs/Radio"
	component={Radio}
	argTypes={{
		size: {
			options: Object.keys(themeSize),
			control: { type: 'radio' }
		},
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Radio {...args} bind:group={yes} value="1"/>
</Template>

<Story name="Default" args={{}}/>
<Story name="Label" args={{}} let:args>
	<Radio {...args} bind:group={yes} value="1">
		<Label component="span" label="Select one"/>
	</Radio>
	<Radio {...args} bind:group={yes} value="2">
		<Label component="span" label="Select two"/>
	</Radio>
	<Radio {...args} bind:group={yes} value="3">
		<Label component="span" label="Select three"/>
	</Radio>
</Story>
