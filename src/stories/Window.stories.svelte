<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Window from "../lib/components/atoms/Window.svelte";
</script>

<Meta
	title="Atoms/Window"
	component={Window}
	argTypes={{

	}}
/>

<Template let:args>
	<Window {...args}>
		Ejemplo de app
	</Window>
</Template>

<Story name="Default" args={{ rounded: false }}/>
