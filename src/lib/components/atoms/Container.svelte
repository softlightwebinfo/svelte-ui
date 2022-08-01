<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	export let flex = false;
	export let all = false;

	const bm = new BEM('UI-Container', {});
	bm.append($$props.class);
</script>

<div style="{$$props.style}" class="{bm.toString()}" class:all class:flex>
	<slot/>
</div>

<style lang="scss">
	.UI-Container {
		width: 100%;
		padding-right: 15px;
		padding-left: 15px;
		margin-right: auto;
		margin-left: auto;

		@media (min-width: 576px) {
			max-width: 540px;
		}

		@media (min-width: 768px) {
			max-width: 720px;
		}

		@media (min-width: 992px) {
			max-width: 960px;
		}

		@media (min-width: 1200px) {
			max-width: 1140px;
		}

		@media (min-width: 1500px) {
			max-width: 1350px;
		}

		&.flex {
			display: flex;
			flex-wrap: wrap;
		}

		&.all {
			width: 100%;
			max-width: 100%;
		}
	}
</style>
