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
	export let styleHeadActions = '';
	export let columnActionName = "Settings";
	export let actionsWidth = "200px";
	export let onClickRow = () => {
		return
	};
	export let onClickRowColumn = () => {
		return
	};
	export let onClickColumnHead = () => {
		return
	};
	export let styleRow = ({row, indexRow}) => {
		return '';
	}
	const bm = new BEM('UI-DataTable');
	bm.append($$props.class);
</script>

<div class={bm.toString()} style={$$props.style} class:responsive>
	<div class="wrapper">
		<Table {small} {showGridLines} {stripedRows}>
			<TableRow slot="head">
				{#each columns as column,indexColumn(column.key)}
					<TableColumn
						style="{column.styleHead}" width={column.width}
						on:click={(e) => onClickColumnHead(e, {column, indexColumn})}
						th
					>
						<slot name="column" {column} {indexColumn}>
							{column.label}
						</slot>
					</TableColumn>
				{/each}
				{#if $$slots.actions}
					<TableColumn width="{actionsWidth}" th style="{styleHeadActions}">
						<slot column={null} indexColumn={null} row={null} indexRow={null}
							  name="actionColumn">{columnActionName}</slot>
					</TableColumn>
				{/if}
			</TableRow>
			{#each rows as row,indexRow(row.id)}
				<TableRow
					style={styleRow({row, indexRow})??''}
					on:click={(e) => onClickRow(e, { row, indexRow })}
				>
					{#each columns as column,indexColumn}
						<TableColumn style="{column.styleHeadBody}" width={column.width} on:click={onClickRowColumn}>
							<slot value="{row[column.key]}" {column} {row} {indexColumn} {indexRow}>
								{row[column.key]}
							</slot>
						</TableColumn>
					{/each}
					{#if $$slots.actions}
						<TableColumn width="{actionsWidth}" style="{styleHeadActions}">
							<slot column={null} indexColumn={null} name="actions" {row} {indexRow}></slot>
						</TableColumn>
					{/if}
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
