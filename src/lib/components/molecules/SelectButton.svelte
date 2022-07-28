<script lang="ts">
	import type { IOption } from '$lib/interfaces/IOption';
	import { createEventDispatcher } from 'svelte';
	import Button from '../atoms/Button.svelte';
	const dispatch = createEventDispatcher();

	export let options: IOption[];
	export let value: string | number | undefined = '';
	export let valueMultiple: string[] | number[] | any[] = [];
	export let multiple: boolean = false;

	$: active = (option: IOption) => {
		return (multiple ? valueMultiple.includes(option.value) : value == option.value)
			? 'primary'
			: undefined;
	};

	const onClick = (option: IOption) => () => {
		if (multiple) {
			valueMultiple.includes(option.value)
				? (valueMultiple = valueMultiple.filter((i) => i != option.value))
				: (valueMultiple = [...valueMultiple, option.value]);
		} else {
			value = option.value;
		}

		dispatch('click', { option, value: multiple ? valueMultiple : value });
	};
</script>

<div class="UI-SelectButton">
	{#each options as option (option.value)}
		<Button
			on:click={onClick(option)}
			theme={active(option)}
			disabled={option.disabled}
			label={option.label}
			icon={option.icon}
			isIcon={!!option.icon && !option.label}
		/>
	{/each}
</div>

<style lang="scss">
	div {
		:global(button.UI-Button) {
			background-color: var(--ui-white);
			border: 1px solid gainsboro;
		}
		> :global(button:first-of-type) {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
			border-right: 0;
		}
		> :global(button:not(:first-of-type):not(:last-of-type)) {
			border-radius: 0;
		}
		> :global(button:not(:first-of-type):not(:last-of-type)) {
			border-right: 0;
		}
		> :global(button:last-of-type) {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}
</style>
