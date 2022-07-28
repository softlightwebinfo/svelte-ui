<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import InputNumber from '$lib/components/molecules/InputNumber.svelte';
</script>

<Meta title="Molecules/inputs/Number/Default" component={InputNumber} argTypes={{}} />

<Template let:args>
	<InputNumber {...args} />
</Template>

<Story name="Default" args={{}} />
<Story name="Buttons" args={{}} />
