<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import TitleDescription from "../lib/components/molecules/TitleDescription.svelte";
</script>

<Meta title="Molecules/TitleDescription" component={TitleDescription} argTypes={{}}/>

<Template let:args>
	<TitleDescription {...args}></TitleDescription>
</Template>

<Story name="Default" args={{
	title:"Aenean euismod elementum",
	description:"Vitae turpis massa sed elementum tempus egestas sed sed risus. In metus vulputate eu scelerisque felis imperdiet proin."
}}/>
