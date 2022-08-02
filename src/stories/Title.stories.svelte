<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Title from "../lib/components/atoms/Title.svelte";
</script>

<Meta title="Atoms/Title" component={Title} argTypes={{}}/>

<Template let:args>
	<Title {...args}></Title>
</Template>

<Story name="Default" args={{
	title:"Title from heading"
}}/>
