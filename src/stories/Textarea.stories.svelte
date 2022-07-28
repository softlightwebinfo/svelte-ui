<script lang="ts">
	import Textarea from './../lib/components/atoms/Textarea.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import FloatIcon from '$lib/components/atoms/FloatIcon.svelte';
</script>

<Meta title="Atoms/Inputs/Textarea" component={Textarea} argTypes={{}} />

<Template let:args>
	<Textarea {...args} />
</Template>

<Story name="Default" args={{ placeholder: 'Write your text' }} />
<Story name="Icon" args={{ placeholder: 'Write your text' }} let:args>
	<FloatIcon icon="fa fa-envelope" start>
		<Textarea {...args} />
	</FloatIcon>
</Story>
