<script lang="ts">
	export let center = false;
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-CardBody', {});
	bm.append($$props.class);
</script>

<section class="{bm.toString()}" style="{$$props.style}" class:center>
	<slot/>
</section>

<style lang="scss">
	section {
		padding: 1.25rem;
	}

	.center {
		text-align: center;
	}
</style>
