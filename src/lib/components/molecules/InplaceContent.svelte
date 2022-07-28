<script lang="ts">
	import { key } from '$lib/context/inplace';
	import { getContext } from 'svelte';

	const { show } = getContext(key);
</script>

{#if $show}
	<slot />
{/if}

<style lang="scss">
</style>
