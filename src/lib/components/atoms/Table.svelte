<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	export let small = false;
	export let showGridLines = true;
	export let stripedRows = true;

	const bm = new BEM('UI-Table');
	bm.append($$props.class);
</script>

<table class={bm.toString()} class:small style={$$props.style} class:showGridLines class:stripedRows>
	<thead>
	<slot name="head"></slot>
	</thead>
	<tbody>
	<slot></slot>
	</tbody>
</table>

<style lang='scss'>
	.UI-Table {
		border-collapse: collapse;
		min-width: 100%;
		table-layout: fixed;

		&:not(.showGridLines) {
			:global(.UI-TableColumn) {
				border: 0;
			}
		}

		&.stripedRows {
			:global(.UI-TableRow:nth-child(even)) {
				background: #fcfcfc;
			}
		}
	}

	.small {
		:global(.UI-TableColumn) {
			padding: 5px;
		}
	}

</style>
