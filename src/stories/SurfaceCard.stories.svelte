<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Row from "../lib/components/atoms/Row.svelte";
	import Col from "../lib/components/atoms/Col.svelte";
	import SurfaceCard from "../lib/components/organismes/SurfaceCard.svelte";
	import image from "../lib/assets/avatar.jpeg"
</script>

<Meta title="Molecules/SurfaceCard" component={SurfaceCard} argTypes={{}}/>

<Template let:args>
	<Row style="padding: 20px">
		{#each [...new Array(4)] as item}
			<Col xl="3">
				<SurfaceCard {...args}/>
			</Col>
		{/each}
	</Row>
</Template>

<Story name="Default" args={{
	title:"Clientes",
	description: "Storybook helps you build UI components in isolation from your app's business logic, data, and context. That makes it easy to develop hard-to-reach states. Save these UI states as stories to revisit during development, testing, or QA.",
	buttonIcon:"fa fa-chevron-right",
	buttonText:"Learn more",
	buttonUrl:"/",
	image,
}}/>
