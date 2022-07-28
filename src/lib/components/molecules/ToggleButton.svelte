<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '../atoms/Button.svelte';

	export let offIcon: string = '';
	export let onIcon: string = '';
	export let offLabel: string = '';
	export let onLabel: string = '';
	export let checked: boolean = false;
	export let isIcon = !onLabel && !offLabel;
	const dispatch = createEventDispatcher();

	const onClick = (e: any) => {
		checked = !checked;

		dispatch('click', e);
	};
</script>

<Button
	class="UI-ToggleButton"
	label={checked ? onLabel : offLabel}
	icon={checked ? onIcon : offIcon}
	on:click={onClick}
	{isIcon}
/>

<style lang="scss">
</style>
