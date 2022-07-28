<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Panel from "../lib/components/atoms/Panel.svelte";
</script>

<Meta
	title="Atoms/Panel"
	component={Panel}
	argTypes={{

	}}
/>

<Template let:args>
	<Panel {...args}>
		<span slot="headerActions"><i class="fa fa-home"></i></span>
	</Panel>
</Template>

<Story name="Default" args={{header:'Card header example' }}/>
