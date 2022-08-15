<script lang="ts">
	import Loader from "./Loader.svelte";

	export let loading = false;
</script>

{#if loading}
	<Loader/>
{:else}
	<slot/>
{/if}
