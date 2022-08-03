<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import Table from "../atoms/Table.svelte";
	import TableRow from "../atoms/TableRow.svelte";
	import TableColumn from "../atoms/TableColumn.svelte";
	import type { ITableColumn, ITableRow } from "../../interfaces/ITable";

	export let columns: ITableColumn[] = [];
	export let rows: ITableRow[] = []
	export let responsive = true;
	export let small = false;
	export let showGridLines = true;
	export let stripedRows = false;

	const bm = new BEM('UI-DataTable');
	bm.append($$props.class);
</script>

<div class={bm.toString()} style={$$props.style} class:responsive>
	<div class="wrapper">
		<Table {small} {showGridLines} {stripedRows}>
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
	</div>
</div>
<style lang='scss'>
	.UI-DataTable {
		position: relative;
	}

	.responsive {
		overflow-x: auto;
	}
</style>
