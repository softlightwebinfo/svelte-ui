<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	export let icon: string;
	export let label = '';

	const bm = new BEM('UI-TextIcon');
	bm.append($$props.class);
</script>
<div class={bm.toString()} style={$$props.style}>
	<i class="{icon}"></i>
	<span>
		<slot>{label}</slot>
	</span>
</div>
<style lang='scss'>
	.UI-TextIcon {

	}
</style>
