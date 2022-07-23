<script lang="ts">
	import { classNames } from '$lib/functions/classNames';

	const [className] = classNames('Button');

	/**
	 * Rounded button
	 */
	export let rounded: boolean = false;
	/**
	 * Label text
	 */
	export let label: string = '';
	export let disabled: boolean = false;
</script>

<button class={className} class:rounded on:click {disabled}>
	<slot>
		<span>{label}</span>
	</slot>
</button>

<style lang="scss">
	[disabled] {
		opacity: 0.6;
	}
	button {
		display: inline-flex;
		position: relative;
		padding: 0;
		margin-right: 0.1em;
		text-decoration: none;
		cursor: pointer;
		text-align: center;
		background: #2196f3;
		color: #fff;
		border: 1px solid #2196f3;
		margin: 0;
		outline: 0 none;
		border-radius: var(--ui-border-default);
		transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
	}
	span {
		display: block;
		line-height: normal;
		padding: 0.5rem 1rem;
	}
	.rounded {
		border-radius: 2rem;
	} 
</style>
