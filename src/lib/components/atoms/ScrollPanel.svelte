<script lang="ts">
	import { BEM } from "../../models/BEM";

	const bm = new BEM('UI-ScrollPanel')
	bm.append($$props.class)
</script>
<div class="{bm.toString()}" style="{$$props.style}">
	<div class="content">
		<slot></slot>
	</div>
</div>
<style lang='scss'>
	.UI-ScrollPanel {
		position: relative;
	}

	.content {
		width: 100%;
		height: 100%;
		position: relative;
		z-index: 1;
		overflow: auto;
	}
</style>
