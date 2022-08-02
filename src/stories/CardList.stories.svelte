<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import CardList from "../lib/components/atoms/CardList.svelte";
	import TitleDescription from "../lib/components/molecules/TitleDescription.svelte";
</script>

<Meta title="Atoms/CardList" component={CardList} argTypes={{}}/>

<Template let:args>
	<CardList {...args}>
		{#each args.items as item}
			<TitleDescription {...item}/>
		{/each}
	</CardList>
</Template>

<Story name="Default" args={{
	isBody:true,
	items:[...new Array(5)].map(()=>({
		title:"Aenean euismod elementum",
		description:"Vitae turpis massa sed elementum tempus egestas sed sed risus. In metus vulputate eu scelerisque felis imperdiet proin."
	}))
}}/>
