<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-TableRow');
	bm.append($$props.class);
</script>
<tr on:click class={bm.toString()} style={$$props.style}>
	<slot></slot>
</tr>
<style lang='scss'>
	.UI-TableRow {
		background: #ffffff;
		color: #495057;
		transition: box-shadow 0.2s;
	}
</style>
