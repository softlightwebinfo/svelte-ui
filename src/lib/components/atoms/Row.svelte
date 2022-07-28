<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-Row', {});
	bm.append($$props.class);
</script>

<div class={bm.toString()}>
	<slot/>
</div>

<style lang="scss">
	.UI-Row {
		--bs-gutter-x: 24px;
		--bs-gutter-y: 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-right: calc(var(--bs-gutter-x) * -0.5);
		margin-left: calc(var(--bs-gutter-x) * -0.5);

		> :global(*) {
			flex-shrink: 0;
			padding-right: calc(var(--bs-gutter-x) * 0.5);
			padding-left: calc(var(--bs-gutter-x) * 0.5);
			padding-bottom: calc(var(--bs-gutter-x) * 0.5);
		}
	}
</style>
