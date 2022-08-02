<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import LatestNews from "../lib/components/organismes/LatestNews.svelte";
	import Container from "../lib/components/atoms/Container.svelte";
</script>

<Meta title="Organismes/LatestNews" component={LatestNews} argTypes={{}}/>

<Template let:args>
	<Container style="padding:20px">
		<LatestNews {...args}/>
	</Container>
</Template>

<Story name="Default" args={{
	title:"Latest news",
	items:[...new Array(5)].map(()=>({
		title:"Aenean euismod elementum",
		description:"Vitae turpis massa sed elementum tempus egestas sed sed risus. In metus vulputate eu scelerisque felis imperdiet proin."
	}))
}}/>
