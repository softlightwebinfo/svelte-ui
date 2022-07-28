<script lang="ts">
	import { BEM } from "../../models/BEM";

	export let rate: number;
	export let totalRate: number;

	const bm = new BEM('UI-Rate')
	bm.append($$props.class)
</script>

<div class="{bm.toString()}" style={$$props.style}>
	{#each [...new Array(5)] as _, index}
		<i class="fa fa-star" class:active={index + 1 <= rate}></i>
	{/each}
	{#if totalRate}
		<span>({totalRate})</span>
	{/if}
</div>

<style lang="scss">
	.UI-Rate {
		display: inline-flex;
		gap: 2px;
		align-items: center;

		i,
		& {
			color: var(--ui-black);
		}

		.active {
			color: gold;
		}
	}

	span {
		margin-left: 10px;
		color: var(--ui-black);
	}
</style>
