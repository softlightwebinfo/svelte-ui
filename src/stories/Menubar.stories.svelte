<script lang="ts">
	import Menubar from '$lib/components/molecules/Menubar.svelte';
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
					icon: 'fa fa-trash'
				},
				{
					separator: true
				},
				{
					label: 'Export',
					icon: 'fa fa-external-link'
				}
			]
		},
		{
			label: 'Edit',
			icon: 'fa fa-pencil',
			items: [
				{
					label: 'Left',
					icon: 'fa fa-align-left'
				},
				{
					label: 'Right',
					icon: 'fa fa-align-right'
				},
				{
					label: 'Center',
					icon: 'fa fa-align-center'
				},
				{
					label: 'Justify',
					icon: 'fa fa-align-justify'
				}
			]
		},
		{
			label: 'Users',
			icon: 'fa fa-user',
			items: [
				{
					label: 'New',
					icon: 'fa fa-user-plus'
				},
				{
					label: 'Delete',
					icon: 'fa fa-user-minus'
				},
				{
					label: 'Search',
					icon: 'fa fa-search',
					items: [
						{
							label: 'Filter',
							icon: 'fa fa-filter',
							items: [
								{
									label: 'Print',
									icon: 'fa fa-print'
								}
							]
						},
						{
							icon: 'fa fa-bars',
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
					icon: 'fa fa-pencil',
					items: [
						{
							label: 'Save',
							icon: 'fa fa-calendar-plus'
						},
						{
							label: 'Delete',
							icon: 'fa fa-calendar-minus'
						}
					]
				},
				{
					label: 'Archieve',
					icon: 'fa fa-calendar-times',
					items: [
						{
							label: 'Remove',
							icon: 'fa-calendar-minus fa'
						}
					]
				}
			]
		},
		{
			label: 'Quit',
			icon: 'fa fa-power-off'
		}
	];
</script>

<Meta title="Molecules/Menubar" component={Menubar} argTypes={{}} />

<Template let:args>
	<Menubar {...args}>
		<i slot="start" class="fa fa-home" />
		<input type="search" placeholder="Write text to search" slot="end" />
	</Menubar>
</Template>

<Story name="Default" args={{ items }} />
