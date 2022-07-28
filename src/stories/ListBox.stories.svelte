<script lang="ts">
	import ListBox from './../lib/components/atoms/ListBox.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	const groupedCities = [
		{
			label: 'Germany',
			value: 'DE',
			icon: 'fa fa-home',
			items: [
				{ label: 'Berlin', value: 'Berlin' },
				{ label: 'Frankfurt', value: 'Frankfurt' },
				{ label: 'Hamburg', value: 'Hamburg' },
				{ label: 'Munich', value: 'Munich' }
			]
		},
		{
			label: 'USA',
			value: 'US',
			icon: 'fa fa-plus',
			items: [
				{ label: 'Chicago', value: 'Chicago' },
				{ label: 'Los Angeles', value: 'Los Angeles' },
				{ label: 'New York', value: 'New York' },
				{ label: 'San Francisco', value: 'San Francisco' }
			]
		},
		{
			label: 'Japan',
			value: 'JP',
			icon: 'fa fa-minus',
			items: [
				{ label: 'Kyoto', value: 'Kyoto' },
				{ label: 'Osaka', value: 'Osaka' },
				{ label: 'Tokyo', value: 'Tokyo' },
				{ label: 'Yokohama', value: 'Yokohama' }
			]
		}
	];
	const cities = [
		{ label: 'New York', value: 'NY' },
		{ label: 'Rome', value: 'RM' },
		{ label: 'London', value: 'LDN' },
		{ label: 'Istanbul', value: 'IST' },
		{ label: 'Paris', value: 'PRS' }
	];
</script>

<Meta title="Atoms/ListBox" component={ListBox} argTypes={{}} />

<Template let:args>
	<ListBox {...args} />
</Template>

<Story name="Default" args={{ items: cities }} />
<Story name="Grouped" args={{ items: groupedCities }} />
<Story name="Search" args={{ items: cities, filter: true }} />
