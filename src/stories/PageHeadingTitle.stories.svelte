<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { themeColor } from '$lib/models/themeColor';
	import PageHeadingTitle from "../lib/components/organismes/PageHeadingTitle.svelte";
	import Toolbar from "../lib/components/atoms/Toolbar.svelte";
	import Button from "../lib/components/atoms/Button.svelte";
</script>

<Meta
	title="Organismes/PageHeadingTitle"
	component={PageHeadingTitle}
	argTypes={{
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		},
	}}
/>

<Template let:args>
	<PageHeadingTitle {...args}>
		<Toolbar slot="right">
			<Button icon="fa fa-plus">Add</Button>
			<Button theme="primary" icon="fa fa-check">Save</Button>
		</Toolbar>
	</PageHeadingTitle>
</Template>

<Story name="Default" args={{
	title:"Application",
	data:[
		{label:"332 Active users",icon:"fa fa-user"},
		{label:"9402 Sessions",icon:"fa fa-globe"},
		{label:"2.23m Avg.Duration",icon:"fa fa-clock"},
	],
	breadCrumb:{
		items:[
			{label:"Application"},
			{label:"Analytics"},
		],
		home:{icon:"fa fa-home"}
	},
}}/>
