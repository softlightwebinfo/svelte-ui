<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import ScrollPanel from "../lib/components/atoms/ScrollPanel.svelte";
</script>

<Meta
	title="Atoms/ScrollPanel"
	component={ScrollPanel}
	argTypes={{

	}}
/>

<Template let:args>
	<ScrollPanel {...args}>
		The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding.
		His beloved son Michael has just come home from the war, but does not intend to become part of his father's
		business.
		Through Michael's life the nature of the family business becomes clear. The business of the family is just like
		the head of the family,
		kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against
		the good of the family.
		Through Michael's life the nature of the family business becomes clear. The business of the family is just like
		the head of the family,
		kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against
		the good of the family.
	</ScrollPanel>
</Template>

<Story name="Default" args={{style:'width:400px;height:200px; ' }}/>
