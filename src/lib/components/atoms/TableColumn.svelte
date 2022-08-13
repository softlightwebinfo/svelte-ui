<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	export let colspan: number;
	export let rowspan: number;
	export let th = false;
	const bm = new BEM('UI-TableColumn');
	bm.append($$props.class);
	$: tag = th ? "th" : "td";
</script>
<svelte:element on:click this="{tag}" {colspan} {rowspan} class={bm.toString()} class:th class:td={!th} style={$$props.style}>
	<slot></slot>
</svelte:element>
<style lang='scss'>
	.UI-TableColumn {
		text-align: left;
		padding: 1rem 1rem;
		border: 1px solid #dee2e6;
	}

	.th {
		font-weight: 700;
		color: #343a40;
		background: #f8f9fa;
		transition: box-shadow 0.2s;
	}

	.td {

	}
</style>
