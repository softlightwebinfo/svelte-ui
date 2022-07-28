<script lang="ts">
	import { typeAction } from '$lib/actions/typeAction';

	import type { TInputType } from '$lib/interfaces/TInputType';
	import type { TSize } from '$lib/interfaces/TSize';
	import { BEM } from '$lib/models/BEM';

	export let value = '';
	export let id = '';
	export let placeholder = '';
	export let name = '';
	export let disabled = false;
	export let readonly = false;
	export let type: TInputType = 'text';
	export let size: TSize = 'md';
	export let autoFocus = false;

	const bm = new BEM('UI-InputText', {
		[size]: !!size
	});
	bm.append($$props.class);
</script>

<input
	{id}
	{name}
	class={bm.toString()}
	use:typeAction={type}
	bind:value
	{placeholder}
	{readonly}
	{disabled}
	{autoFocus}
/>

<style lang="scss">
	input {
		@include getField();
	}
	.s {
		font-size: 0.875rem;
		padding: 0.65625rem 0.65625rem;
	}
	.md {
		padding: 0.75rem 0.75rem;
		font-size: 1rem;
	}
	.lg {
		font-size: 1.25rem;
		padding: 0.9375rem 0.9375rem;
	}
</style>
