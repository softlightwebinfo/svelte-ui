<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import SurfaceStat from "../lib/components/organismes/SurfaceStat.svelte";
	import Row from "../lib/components/atoms/Row.svelte";
	import Col from "../lib/components/atoms/Col.svelte";
</script>

<Meta title="Molecules/SurfaceStat" component={SurfaceStat} argTypes={{}}/>

<Template let:args>
	<Row style="padding: 20px">
		{#each [...new Array(4)] as item}
			<Col xl="3">
				<SurfaceStat {...args}/>
			</Col>
		{/each}
	</Row>
</Template>

<Story name="Default" args={{
	title:"Clientes",
	value: 4000,
	icon:"fa fa-user"
}}/>
