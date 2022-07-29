<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import TplDashboard from "../lib/components/templates/TplDashboard.svelte";
	import Avatar from "../lib/components/atoms/Avatar.svelte";
	import imageAvatar from '$lib/assets/avatar.jpeg';
	import Group from "../lib/components/atoms/Group.svelte";
	import Button from "../../package/components/atoms/Button.svelte";
	import OverlayBadge from "../../package/components/atoms/OverlayBadge.svelte";
	import Badge from "../../package/components/atoms/Badge.svelte";
	import Dropdown from "../lib/components/atoms/Dropdown.svelte";
	import MenuList from "../lib/components/molecules/MenuList.svelte";
	import Divider from "../../package/components/atoms/Divider.svelte";
	import TieredMenu from "../lib/components/molecules/TieredMenu.svelte";

	const menuBar = [
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

	const userItem = [
		{label: "Web", href: "/", icon: "fa fa-chevron-left"},
		{label: "Dashboard", href: "/dashboard", icon: "fa fa-dashboard"},
		{label: "My profile", href: "/dashboard/profile", icon: "fa fa-user"},
		{label: "Notifications", href: "/dashboard/notifications", icon: "fa fa-bell"},
		{label: "Messages", href: "/dashboard/messages", icon: "fa fa-envelope"},
		{label: "Logout", href: "/dashboard", icon: "fa fa-unlock"},
	]

	const aside = [
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
							icon: 'fa fa-bookmark',
							href: '/test',
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

<Meta
	title="Templates/Dashboard"
	component={TplDashboard}
	argTypes={{

	}}
/>

<Template let:args>
	<TplDashboard {...args}>
		<svelte:fragment slot="navbarEnd">
			<Group gap="20" style="margin-right: 10px">
				<OverlayBadge>
					<Button isIcon rounded icon="fa fa-envelope"/>
					<Badge value="10"/>
				</OverlayBadge>
				<OverlayBadge>
					<Button isIcon rounded icon="fa fa-bell"/>
					<Badge value="10"/>
				</OverlayBadge>
				<Dropdown position="right">
					<Avatar slot="trigger" image="{imageAvatar}"/>
					<Group style="padding: 20px;padding-bottom: 0">
						<Avatar size="lg" image="{imageAvatar}"/>
						<span>Rafa Gonzalez</span>
					</Group>
					<Divider/>
					<MenuList items={userItem}/>
				</Dropdown>
			</Group>
		</svelte:fragment>
		<svelte:fragment slot="sidebar" let:openAside>
			{#if openAside}
				<Group style="padding: 20px;padding-bottom: 0">
					<Avatar size="lg" image="{imageAvatar}"/>
					<span>Rafa Gonzalez</span>
				</Group>
				<Divider/>
			{/if}
			<TieredMenu desplegable items={aside}/>
		</svelte:fragment>
	</TplDashboard>
</Template>

<Story
	name="Default"
	args={{ logo:'https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png',menuBar,sidebarPaddingContent:false}}/>
