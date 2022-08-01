<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import PageHeading from "../lib/components/organismes/PageHeading.svelte";
	import image from '../lib/assets/banner.png'
	import avatar from '../lib/assets/avatar.jpeg'
	import Toolbar from "../lib/components/atoms/Toolbar.svelte";
	import Button from "../lib/components/atoms/Button.svelte";
	import Dropdown from "../lib/components/atoms/Dropdown.svelte";
	import Menu from "../lib/components/molecules/Menu.svelte";
</script>

<Meta title="Organismes/PageHeading/User" component={PageHeading} argTypes={{}}/>

<Template let:args>
	<PageHeading {...args}>
		<Toolbar slot="actions">
			<Button theme="primary" rounded icon="fa fa-plus">Follow</Button>
			<Button rounded icon="fa fa-link">Website</Button>
			<Dropdown position="right">
				<Button slot="trigger" rounded isIcon icon="fa fa-bars"/>
				<Menu items={[
					{label:"Item1"},
					{label:"Item2"},
					{label:"Item3"},
					{label:"Item4"},
				]}/>
			</Dropdown>
		</Toolbar>
	</PageHeading>
</Template>

<Story name="Default" args={{
	image,
	avatar,
	name:"Codeunic",
	description:"Vitae tortor condimentum lacinia quis vel eros.",
	extra:["Software", "USA", "15523 Followers"]
}}/>
