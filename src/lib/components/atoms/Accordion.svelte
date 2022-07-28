<script lang="ts">
	import { key } from '$lib/context/accordion';
	import { writable } from 'svelte/store';
	import { createEventDispatcher, setContext } from 'svelte';

	export let multiple: boolean = false;
	let data = writable('');
	const dispatch = createEventDispatcher();

	setContext(key, {
		data,
		multiple,
		set: (key: string, open: boolean) => {
			data.set(open ? key : '');
		}
	});

	data.subscribe((i) => {
		dispatch('click', { selected: $data });
	});
</script>

<div class="UI-Accordion">
	<slot />
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}
</style>
