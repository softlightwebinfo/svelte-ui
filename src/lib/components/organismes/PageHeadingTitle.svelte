<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import BreadCrumb from "../molecules/BreadCrumb.svelte";
	import SurfaceSection from "../atoms/SurfaceSection.svelte";
	import type { IBreadCrumb } from "../../interfaces/components/IBreadCrumb.ts";
	import Title from "../atoms/Title.svelte";
	import Group from "../atoms/Group.svelte";
	import type { IItem } from "../../interfaces/IItem";
	import TextIcon from "../atoms/TextIcon.svelte";
	import Toolbar from "../atoms/Toolbar.svelte";

	export let breadCrumb: IBreadCrumb = {
		items: [],
		home: null,
	};
	export let title: string;
	export let data: IItem[] = [];

	const bm = new BEM('UI-PageHeadingTitle');
	bm.append($$props.class);
</script>
<div class={bm.toString()} style={$$props.style}>
	<SurfaceSection flex gap="20">
		<Group spaceBetween>
			<div class="left">
				<BreadCrumb isDefault {...breadCrumb}/>
				<Title margin="{false}" {title}/>
				{#if data && data.length}
					<Toolbar gap="20">
						{#each data as item}
							<TextIcon {...item}/>
						{/each}
					</Toolbar>
				{/if}
			</div>
			{#if $$slots.right}
				<div class="right">
					<slot name="right"></slot>
				</div>
			{/if}
		</Group>
		{#if $$slots.default}
			<div class="content">
				<slot></slot>
			</div>
		{/if}
	</SurfaceSection>
</div>
<style lang='scss'>
	.UI-PageHeadingTitle {
		.left {
			display: flex;
			flex-direction: column;
			gap: 20px;
		}
	}
</style>
