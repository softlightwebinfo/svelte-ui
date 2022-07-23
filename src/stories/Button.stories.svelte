<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Button from '$atoms/Button/Button.svelte';

	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<Meta title="Atoms/Button" component={Button} />

<Template let:args>
	<Button {...args} on:click={handleClick} label="You clicked: {count}" />
</Template>

<Story name="Rounded" args={{ rounded: true }} />
<Story name="Disabled" args={{ disabled: true }} />

<Story name="Square" source args={{ rounded: false }} />

<Story name="Button No Args">
	<Button>Label</Button>
</Story>
