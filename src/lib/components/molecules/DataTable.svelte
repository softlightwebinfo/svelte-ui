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
	export let onClickRow = null;
	export let onClickRowColumn = null;
	export let onClickColumnHead = null;

	const bm = new BEM('UI-DataTable');
	bm.append($$props.class);
</script>

<div class={bm.toString()} style={$$props.style} class:responsive>
	<div class="wrapper">
		<Table {small} {showGridLines} {stripedRows}>
			<TableRow slot="head">
				{#each columns as column}
					<TableColumn on:click={onClickColumnHead} th>
						<slot name="column">
							{column.label}
						</slot>
					</TableColumn>
				{/each}
			</TableRow>
			{#each rows as row,indexRow}
				<TableRow on:click={onClickRow}>
					{#each columns as column,indexColumn}
						<TableColumn on:click={onClickRowColumn}>
							<slot {column} {row} {indexColumn} {indexRow}>
								{row[column.key]}
							</slot>
						</TableColumn>
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
