<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import CardList from "../atoms/CardList.svelte";
	import Tile from "../atoms/Tile.svelte";
	import type { ITile } from "../../interfaces/ITile";

	const bm = new BEM('UI-TeamMembers');
	bm.append($$props.class);
	export let items: ITile[];
	export let title = ''
	export let isBody = true;
	export let headerBorder = false;
</script>

<CardList {isBody} {headerBorder} {title} class={bm.toString()} style={$$props.style}>
	{#each items as item,index}
		<slot name="item" {item} {index}>
			<Tile on:click on:iconLeft on:iconRight {...item}/>
		</slot>
	{/each}
	<slot></slot>
</CardList>
