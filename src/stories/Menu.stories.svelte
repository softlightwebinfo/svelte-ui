<script lang="ts">
	import MenuAtom from '$lib/components/atoms/MenuAtom.svelte';

	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Atoms/Menu" component={MenuAtom} argTypes={{}} />

<Template let:args>
	<MenuAtom {...args}>Esto es un menu</MenuAtom>
</Template>

<Story name="Default" args={{}} />
