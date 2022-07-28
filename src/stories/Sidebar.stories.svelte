<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Sidebar from "../lib/components/atoms/Sidebar.svelte";
</script>

<Meta
	title="Atoms/Sidebar"
	component={Sidebar}
	argTypes={{
	}}
/>

<Template let:args>
	<Sidebar {...args}/>
</Template>

<Story name="Default" args={{ style:"height: 100vh;"}}/>
