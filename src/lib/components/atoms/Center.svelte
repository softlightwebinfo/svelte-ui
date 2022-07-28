<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-Center', {});
	bm.append($$props.class);
</script>

<div class={bm.toString()}>
	<slot/>
</div>

<style lang="scss">
	.UI-Center {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
