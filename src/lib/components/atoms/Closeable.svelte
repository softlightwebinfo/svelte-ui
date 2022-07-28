<script>
	import Close from "./Close.svelte";
	import {BEM} from "$lib/models/BEM";

	const bm = new BEM('UI-Closeable', {});
	bm.append($$props.class);
</script>

<div class="{bm.toString()}" on:click>
	<Close/>
</div>

<style lang="scss">
	.UI-Closeable {
		$s: 15px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: var(--ui-secondary);
		border-radius: 10px;
		height: $s;
		width: $s;
		color: white;
		vertical-align: middle;
		cursor: pointer;
	}
</style>
