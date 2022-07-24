<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Button from '$lib/components/atoms/Button.svelte';
	import { themeColor } from '$lib/models/themeColor';

	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<Meta
	title="Atoms/Button"
	component={Button}
	argTypes={{
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Button {...args} on:click={handleClick} label="You clicked: {count}" />
</Template>

<Story name="Rounded" args={{ rounded: true }} />
<Story name="Square" source args={{ rounded: false }} />
<Story name="Disabled" args={{ disabled: true }} />
<Story name="Raised" args={{ raised: true }} />
<Story name="Icons" let:args args={{ disabled: false, rounded: true, label: 'Button icon' }}>
	<Button {...args}>
		<i slot="left" class="fa fa-chevron-left" />
	</Button>
	<Button {...args}>
		<i slot="right" class="fa fa-chevron-right" />
	</Button>
	<Button {...args} isIcon>
		<i class="fa fa-chevron-right" />
	</Button>
</Story>

<Story name="Button No Args">
	<Button>Label</Button>
</Story>
