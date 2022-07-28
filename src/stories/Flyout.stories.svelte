<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Flyout from "../lib/components/molecules/Flyout.svelte";
</script>

<Meta title="Molecules/Flyout" component={Flyout}/>

<Template let:args>
	<Flyout {...args}>
		Hola que tal estamos
	</Flyout>
</Template>

<Story name="Default" args={{  }}/>
