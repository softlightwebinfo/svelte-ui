<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	export let col = null;
	export let offset = false;
	export let auto = null;
	export let sm = null;
	export let md = null;
	export let lg = null;
	export let xl = null;
	export let xxl = null;
	const _data = offset ? 'offset' : 'col';
	const _col = col ? `${_data}-${col}` : '';
	const _sm = sm ? `${_data}-sm-${sm}` : '';
	const _md = md ? `${_data}-md-${md}` : '';
	const _lg = lg ? `${_data}-lg-${lg}` : '';
	const _xl = xl ? `${_data}-xl-${xl}` : '';
	const _xxl = xxl ? `${_data}-xxl-${xxl}` : '';

	const bm = new BEM('UI-Col', {
		[_col]: !!_col,
		[_sm]: !!_sm,
		[_md]: !!_md,
		[_lg]: !!_lg,
		[_xl]: !!_xl,
		[_xxl]: !!_xxl,
	});
	bm.append($$props.class);
</script>

<div
	class={bm.toString()}
	class:offset
	class:auto
>
	<slot/>
</div>

<style lang="scss">
	.UI-Col {
		flex: 1 0 0%;
	}

	.auto {
		flex: 0 0 auto;
		width: auto;
	}

	@for $i from 1 through 12 {
		.col-#{$i} {
			flex: 0 0 calc(100% * #{$i} / var(--ui-columns));
		}

		.offset-#{$i - 1} {
			margin-left: calc(100% * #{$i} / var(--ui-columns));
		}
	}

	@media (min-width: 576px) {
		.col-sm-auto {
			flex: 0 0 auto;
			width: auto;
		}

		@for $i from 1 through 12 {
			.col-sm-#{$i} {
				flex: 0 0 calc(100% * #{$i} / var(--ui-columns));
			}

			.offset-sm-#{$i - 1} {
				margin-left: calc(100% * #{$i} / var(--ui-columns));
			}
		}
	}

	@media (min-width: 768px) {
		.col-md-auto {
			flex: 0 0 auto;
			width: auto;
		}

		@for $i from 1 through 12 {
			.col-md-#{$i} {
				flex: 0 0 calc(100% * #{$i} / var(--ui-columns));
			}

			.offset-md-#{$i - 1} {
				margin-left: calc(100% * #{$i} / var(--ui-columns));
			}
		}
	}

	@media (min-width: 992px) {
		.col-lg-auto {
			flex: 0 0 auto;
			width: auto;
		}

		@for $i from 1 through 12 {
			.col-lg-#{$i} {
				flex: 0 0 calc(100% * #{$i} / var(--ui-columns));
			}

			.offset-lg-#{$i - 1} {
				margin-left: calc(100% * #{$i} / var(--ui-columns));
			}
		}
	}

	@media (min-width: 1200px) {
		.col-xl-auto {
			flex: 0 0 auto;
			width: auto;
		}

		@for $i from 1 through 12 {
			.col-xl-#{$i} {
				flex: 0 0 calc(100% * #{$i} / var(--ui-columns));
			}

			.offset-xl-#{$i - 1} {
				margin-left: calc(100% * #{$i} / var(--ui-columns));
			}
		}
	}

	@media (min-width: 1400px) {
		.col-xxl-auto {
			flex: 0 0 auto;
			width: auto;
		}

		@for $i from 1 through 12 {
			.col-xxl-#{$i} {
				flex: 0 0 calc(100% * #{$i} / var(--ui-columns));
			}

			.offset-xxl-#{$i - 1} {
				margin-left: calc(100% * #{$i} / var(--ui-columns));
			}
		}
	}
</style>
