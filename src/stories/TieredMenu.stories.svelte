<script lang="ts">
	import MenuAtom from '$lib/components/atoms/MenuAtom.svelte';

	import TieredMenu from '$lib/components/molecules/TieredMenu.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	const items = [
		{
			label: 'File',
			icon: 'fa fa-file',
			items: [
				{
					label: 'New',
					icon: 'fa fa-plus',
					items: [
						{
							label: 'Bookmark',
							icon: 'fa fa-bookmark'
						},
						{
							label: 'Video',
							icon: 'fa fa-video'
						}
					]
				},
				{
					label: 'Delete',
					icon: 'pi pi-fw pi-trash'
				},
				{
					separator: true
				},
				{
					label: 'Export',
					icon: 'pi pi-fw pi-external-link'
				}
			]
		},
		{
			label: 'Edit',
			icon: 'fa fa-pencil',
			items: [
				{
					label: 'Left',
					icon: 'pi pi-fw pi-align-left'
				},
				{
					label: 'Right',
					icon: 'pi pi-fw pi-align-right'
				},
				{
					label: 'Center',
					icon: 'pi pi-fw pi-align-center'
				},
				{
					label: 'Justify',
					icon: 'pi pi-fw pi-align-justify'
				}
			]
		},
		{
			label: 'Users',
			icon: 'fa fa-user',
			items: [
				{
					label: 'New',
					icon: 'pi pi-fw pi-user-plus'
				},
				{
					label: 'Delete',
					icon: 'pi pi-fw pi-user-minus'
				},
				{
					label: 'Search',
					icon: 'pi pi-fw pi-users',
					items: [
						{
							label: 'Filter',
							icon: 'pi pi-fw pi-filter',
							items: [
								{
									label: 'Print',
									icon: 'pi pi-fw pi-print'
								}
							]
						},
						{
							icon: 'pi pi-fw pi-bars',
							label: 'List'
						}
					]
				}
			]
		},
		{
			label: 'Events',
			icon: 'fa fa-calendar',
			items: [
				{
					label: 'Edit',
					icon: 'pi pi-fw pi-pencil',
					items: [
						{
							label: 'Save',
							icon: 'pi pi-fw pi-calendar-plus'
						},
						{
							label: 'Delete',
							icon: 'pi pi-fw pi-calendar-minus'
						}
					]
				},
				{
					label: 'Archieve',
					icon: 'pi pi-fw pi-calendar-times',
					items: [
						{
							label: 'Remove',
							icon: 'pi pi-fw pi-calendar-minus'
						}
					]
				}
			]
		},
		{
			separator: true
		},
		{
			label: 'Quit',
			icon: 'fa fa-power-off'
		}
	];
</script>

<Meta title="Molecules/TieredMenu" component={TieredMenu} />

<Template let:args>
	<MenuAtom>
		<TieredMenu {...args} />
	</MenuAtom>
</Template>

<Story name="Default" args={{ items }} />
