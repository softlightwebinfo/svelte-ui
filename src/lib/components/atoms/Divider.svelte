<script lang="ts">
	import { BEM } from "../../models/BEM";

	const bm = new BEM('UI-Divider')
	bm.append($$props.class);
</script>

<div class="{bm.toString()}"></div>

<style lang='scss'>
	div {
		display: flex;
		width: 100%;
		position: relative;
		align-items: center;
		margin: 1.25rem 0;
		height: 1px;
		background: #dee2e6;
	}
</style>
