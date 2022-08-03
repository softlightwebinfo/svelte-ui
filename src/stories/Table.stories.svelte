<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Table from "../lib/components/atoms/Table.svelte";
	import TableRow from "../lib/components/atoms/TableRow.svelte";
	import TableColumn from "../lib/components/atoms/TableColumn.svelte";

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

<Meta title="Atoms/Table" component={Table} argTypes={{}}/>

<Template let:args>
	<Table {...args}>
		<TableRow slot="head">
			{#each columns as column}
				<TableColumn th>{column.label}</TableColumn>
			{/each}
		</TableRow>
		{#each rows as row}
			<TableRow>
				{#each columns as column}
					<TableColumn>{row[column.key]}</TableColumn>
				{/each}
			</TableRow>
		{/each}
	</Table>
</Template>

<Story name="Default" args={{}}/>
