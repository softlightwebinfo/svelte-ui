<script lang="ts">
	import type { TThemeColor } from '$lib/interfaces/TThemeColor';

	import { BEM } from '$lib/models/BEM';

	export let checked: boolean = false;
	export let id: string = '';
	export let name: string = '';
	export let disabled: boolean = false;
	export let theme: TThemeColor = 'primary';

	const bm = new BEM('UI-Switch', {});
	bm.append('UI-Switch');
</script>

<label class={bm.toString()} class:checked class:disabled on:click>
	<input {id} {name} type="checkbox" role="switch" aria-checked="true" bind:checked {disabled}/>
	<span class={bm.className('slider', { [theme]: !!theme })} />
	<slot />
</label>

<style lang="scss">
	label {
		width: 3rem;
		height: 1.75rem;
		position: relative;
		display: inline-block;
	}
	input {
		display: none;
	}
	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border: 1px solid transparent;
		transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
		border-radius: 30px;
		background: #ced4da;
		transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
		border-radius: 30px;
		&::before {
			position: absolute;
			content: '';
			top: 50%;
			background: var(--ui-white);
			width: 1.25rem;
			height: 1.25rem;
			left: 0.25rem;
			margin-top: -0.625rem;
			border-radius: 50%;
			transition-duration: 0.2s;
		}
	}
	.checked .slider {
		background: var(--ui-primary);
		&::before {
			transform: translateX(1.05rem);
		}
	}

	@include getThemeColors();
	.disabled {
		opacity: var(--ui-disabled);
	}
</style>
