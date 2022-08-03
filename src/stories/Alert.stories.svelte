<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { themeColor } from '$lib/models/themeColor';
	import Alert from "../lib/components/atoms/Alert.svelte";
</script>

<Meta
	title="Atoms/Alert"
	component={Alert}
	argTypes={{
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		},
	}}
/>

<Template let:args>
	<Alert {...args}>
		Info Message Content
	</Alert>
</Template>

<Story name="Default" args={{  }}/>
<Story name="Inline" args={{ inline:true }}/>
