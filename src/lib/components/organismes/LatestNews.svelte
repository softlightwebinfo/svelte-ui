<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import type { ITitleDescription } from "../../interfaces/ITitleDescription";
	import type { IButton } from "../../interfaces/IButton";
	import CardList from "../atoms/CardList.svelte";
	import TitleDescription from "../molecules/TitleDescription.svelte";
	import Button from "../atoms/Button.svelte";
	import Group from "../atoms/Group.svelte";

	const bm = new BEM('UI-LatestNews');
	bm.append($$props.class);
	export let items: ITitleDescription[];
	export let title = ''
	export let isBody = true;
	export let headerBorder = false;
	export let actions: IButton[] = [
		{
			label: "Clear all",
			block: true,
		},
		{label: "New Entry", theme: "primary", block: true}
	];
</script>

<CardList {isBody} {headerBorder} {title} class={bm.toString()} style={$$props.style}>
	{#each items as item,index}
		<slot {item} {index}>
			<TitleDescription {...item}/>
		</slot>
	{/each}
	<Group gap="20">
		{#each actions as action,index}
			<a href="{action.href}">
				<Button {...action}/>
			</a>
		{/each}
	</Group>
</CardList>
<style lang='scss'>
	a {
		width: 100%;
		display: block;
	}
</style>
