<script lang="ts">
	import Chip from '$lib/components/atoms/Chip.svelte';
	import Chips from '$lib/components/molecules/Chips.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta title="Molecules/Chips" component={Chips} argTypes={{}} />

<Template let:args>
	<Chips {...args} />
</Template>

<Story name="Default" args={{}} />
<Story name="Template" args={{}} let:args>
	<Chips let:item let:onDelete let:index>
		<div>
			{item.label}
			<i class="fa fa-trash" on:click={onDelete(item, index)} />
		</div>
	</Chips>
</Story>
