<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Rate from "../lib/components/atoms/Rate.svelte";
</script>

<Meta
	title="Atoms/Rate"
	component={Rate}
	argTypes={{

	}}
/>

<Template let:args>
	<Rate {...args}/>
</Template>

<Story name="Default" args={{ }}/>
