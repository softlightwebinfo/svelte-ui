<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import DataTable from "../lib/components/molecules/DataTable.svelte";
	import Container from "../lib/components/atoms/Container.svelte";
	import Toolbar from "$atoms/Toolbar.svelte";
	import Button from "$atoms/Button.svelte";

	export let columns = [
		{label: "ID", key: "id", type: "string"},
		{label: "Name", key: "name", type: "string"},
		{label: "Email", key: "email", type: "string"},
		{label: "Date", key: "date", type: "date"},
	]
	export let rows = [
		{id: 1, name: "Rafa gonzalez", email: "info@codeunic.com", date: "2022-10-10"},
		{id: 2, name: "Romero Ramiz", email: "info@codeunic.com", date: "2022-10-10"},
		{id: 3, name: "Tete Esperanza", email: "info@codeunic.com", date: "2022-10-10"},
		{id: 4, name: "Dani Martin", email: "info@codeunic.com", date: "2022-10-10"},
		{id: 5, name: "Noah Orfila", email: "info@codeunic.com", date: "2022-10-10"},
	]
</script>

<Meta title="Molecules/DataTable" component={DataTable} argTypes={{}}/>

<Template let:args>
	<Container style="padding:20px;">
		<DataTable {...args} onClickRow="{console.log}">
			<Toolbar slot="actions">
				<Button>Guardar</Button>
			</Toolbar>
		</DataTable>
	</Container>
</Template>

<Story name="Default" args={{columns,rows}}/>
