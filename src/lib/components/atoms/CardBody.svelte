<script lang="ts">
	export let center = false;
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-CardBody', {
		'UI-CardBody--center': center,
	});
	bm.append($$props.class);
</script>

<section class="{bm.toString()}" style="{$$props.style}">
	<slot/>
</section>

<style lang="scss">
	.UI-CardBody {
		padding: 1.25rem;

		&--center {
			text-align: center;
		}
	}
</style>
