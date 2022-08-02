<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import TeamMembers from "../lib/components/organismes/TeamMembers.svelte";
	import avatar from '../lib/assets/avatar.jpeg';
	import Container from "../lib/components/atoms/Container.svelte";
</script>

<Meta title="Organismes/TeamMembers" component={TeamMembers} argTypes={{}}/>

<Template let:args>
	<Container style="padding:20px">
		<TeamMembers {...args}/>
	</Container>
</Template>

<Story name="Default" args={{
	title:"Team members",
	items:[
		{leftAvatar:avatar,title:"Janette Hudson",subTitle:"UI/UX Designer"},
		{leftAvatar:avatar,title:"Theresa Webb Hudson",subTitle:"UI/UX Designer"},
		{leftAvatar:avatar,title:"Arlene McCoy",subTitle:"UI/UX Designer"},
		{leftAvatar:avatar,title:"Jacob Jones",subTitle:"UI/UX Designer"},
		{leftAvatar:avatar,title:"James Cooper",subTitle:"UI/UX Designer"},
	]
}}/>
