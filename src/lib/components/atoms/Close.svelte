<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-Close');
	bm.append($$props.class);
	bm.append("fa fa-times");
</script>

<i class={bm.toString} style={$$props.style} on:click></i>

<style lang='scss'>
	.UI-Close {

	}
</style>
