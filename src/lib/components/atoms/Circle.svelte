<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import type { TSize } from '$lib/interfaces/size';

	export let rounded = true;
	export let size: TSize = 'sm';

	const bm = new BEM('UI-Circle', {[size]: !!size});
	bm.append($$props.class);
</script>

<div class={bm.toString()} class:rounded>
	<slot/>
</div>

<style lang="scss">
	div {
		align-items: center;
		background-color: var(--ui-primary);
		position: relative;
		overflow: hidden;
		display: inline-flex;
		justify-content: center;
		color: white;
	}

	.rounded {
		border-radius: 50%;
	}
</style>
