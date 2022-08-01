<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Description from "$lib/components/atoms/Description.svelte";
	import Container from "../lib/components/atoms/Container.svelte";
</script>

<Meta title="Atoms/Description" component={Description} argTypes={{}}/>

<Template let:args>
	<Container style="padding: 80px">
		<Description {...args}>
			Storybook helps you build UI components in isolation from your app's business logic, data, and context. That
			makes it easy to develop hard-to-reach states. Save these UI states as stories to revisit during
			development,
			testing, or QA.
		</Description>
		<Description>
			Browse example stories now by navigating to them in the sidebar. View their code in the stories directory to
			learn how they work. We recommend building UIs with a component-driven process starting with atomic
			components
			and ending with pages.
		</Description>
	</Container>
</Template>

<Story name="Default" args={{}}/>
