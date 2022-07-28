<script lang="ts">
	import BreadCrumb from '$lib/components/molecules/BreadCrumb.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	const items = [
		{ label: 'Categories' },
		{ label: 'Sports' },
		{ label: 'Football' },
		{ label: 'Countries' },
		{ label: 'Spain' },
		{ label: 'F.C. Barcelona' },
		{ label: 'Squad' },
		{ label: 'Lionel Messi', href: 'https://en.wikipedia.org/wiki/Lionel_Messi' }
	];

	const home = { icon: 'fa fa-home', href: 'https://www.primefaces.org/primereact' };
</script>

<Meta title="Molecules/BreadCrumb" component={BreadCrumb} />

<Template let:args>
	<BreadCrumb {...args} />
</Template>

<Story name="Default" args={{ items, home }} />
