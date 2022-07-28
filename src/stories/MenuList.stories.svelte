<script lang="ts">
	import MenuAtom from '$lib/components/atoms/MenuAtom.svelte';
	import MenuList from '$lib/components/molecules/MenuList.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	let items = [
		{
			label: 'Options',
			isHeader: true,
			items: [
				{
					label: 'New',
					icon: 'fa fa-plus',
					command: () => {
						window.location.hash = '/fileupload';
					}
				},
				{ label: 'Delete', icon: 'fa fa-trash', href: 'http://primetek.com.tr' }
			]
		},
		{
			label: 'Account',
			isHeader: true,
			items: [
				{
					label: 'Options',
					icon: 'fa fa-cog',
					command: () => {
						window.location.hash = '/';
					}
				},
				{ label: 'Sign Out', icon: 'fa fa-power-off' }
			]
		}
	];
</script>

<Meta title="Molecules/MenuList" component={MenuList} />

<Template let:args>
	<MenuList {...args} />
</Template>

<Story name="Default" args={{ items }} />

<Story name="Menu" args={{ items }} let:args>
	<MenuAtom>
		<MenuList {...args} />
	</MenuAtom>
</Story>
