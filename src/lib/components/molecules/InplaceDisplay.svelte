<script lang="ts">
	import { key } from '$lib/context/inplace';
	import { getContext } from 'svelte';

	const { show, onShow } = getContext(key);
</script>

{#if !$show}
	<span on:click={onShow}><slot /></span>
{/if}

<style lang="scss">
</style>
