<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Tile from "../lib/components/atoms/Tile.svelte";
	import avatar from '../lib/assets/avatar.jpeg';
</script>

<Meta
	title="Atoms/Tile"
	component={Tile}
	argTypes={{

	}}
/>

<Template let:args>
	<Tile {...args}/>
</Template>

<Story name="Default" args={{
	title:"Janette Hudson",
	subTitle:"UI/UX Designer",
	leftAvatar:avatar,
 }}/>
<Story name="Icon" args={{
	title:"Janette Hudson",
	subTitle:"UI/UX Designer",
	leftAvatar:avatar,
	rightIcon:"fa fa-chevron-right"
 }}/>
