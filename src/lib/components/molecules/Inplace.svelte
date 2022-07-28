<script lang="ts">
	import { setContext } from 'svelte';
	import { key } from '$lib/context/inplace';
	import { writable } from 'svelte/store';
	let show = writable(false);
	setContext(key, {
		show,
		onShow: () => show.set(true),
		onHide: () => show.set(false),
		onToggle: () => show.update((prv) => !prv)
	});
</script>

<slot />

<style lang="scss">
</style>
