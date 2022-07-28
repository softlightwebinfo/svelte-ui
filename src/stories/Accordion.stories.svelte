<script lang="ts">
	import Accordion from '$lib/components/atoms/Accordion.svelte';
	import AccordionItem from '$lib/components/atoms/AccordionItem.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Atoms/Accordion" component={Accordion} argTypes={{}} />

<Template let:args>
	<Accordion {...args}>
		<AccordionItem key="1" header="Click para abrir">Hola, es un texto de prueba</AccordionItem>
		<AccordionItem header="Click para abrir 2" key="2">
			Hola, prueba numero dos para testear
		</AccordionItem>
	</Accordion>
</Template>

<Story name="Default" args={{}} />
<Story name="Multiple" args={{ multiple: true }} />
