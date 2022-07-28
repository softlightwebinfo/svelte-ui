<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Inplace from '$lib/components/molecules/Inplace.svelte';
	import InplaceDisplay from '$lib/components/molecules/InplaceDisplay.svelte';
	import InplaceContent from '$lib/components/molecules/InplaceContent.svelte';
</script>

<Meta title="Molecules/Inplace" component={Inplace} argTypes={{}} />

<Template let:args>
	<Inplace {...args}>
		<InplaceDisplay><div>Click to Edit</div></InplaceDisplay>
		<InplaceContent>esto es un texto para mostrar oculto</InplaceContent>
	</Inplace>
	<Inplace {...args}>
		<InplaceDisplay><div>Click to Edit 2</div></InplaceDisplay>
		<InplaceContent>Funcionara independientemente?</InplaceContent>
	</Inplace>
</Template>

<Story name="Default" args={{}} />
