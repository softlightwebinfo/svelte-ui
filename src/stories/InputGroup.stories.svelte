<script lang="ts">
	import Input from '$lib/components/atoms/Input.svelte';

	import InputGroup from '$lib/components/atoms/InputGroup.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Atoms/Inputs/Group" component={InputGroup} argTypes={{}} />

<Template let:args>
	<InputGroup {...args} icon="fa fa-user">
		<Input placeholder="Write your text" />
	</InputGroup>
</Template>

<Story name="Default" />
