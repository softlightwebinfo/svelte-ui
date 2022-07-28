<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Badge from '$lib/components/atoms/Badge.svelte';
	import { themeColor } from '$lib/models/themeColor';
	import { themeSize } from '$lib/models/themeSize';
	import OverlayBadge from '$lib/components/atoms/OverlayBadge.svelte';
</script>

<Meta
	title="Atoms/Badge"
	component={Badge}
	argTypes={{
		theme: {
			options: Object.keys(themeColor),
			control: { type: 'radio' }
		},
		size: {
			options: Object.keys(themeSize),
			control: { type: 'radio' }
		}
	}}
/>

<Template let:args>
	<Badge {...args} />
</Template>

<Story name="Default" args={{ value: 2 }} />
<Story name="Max" args={{ value: 200, max: 90 }} />
<Story name="Overlay" args={{ value: 2 }} let:args>
	<OverlayBadge>
		<i style="font-size:2em;display:inline-block;" class="fa fa-home" />
		<Badge {...args} />
	</OverlayBadge>
</Story>
