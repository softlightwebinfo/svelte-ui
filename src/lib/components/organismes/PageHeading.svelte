<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import BannerImage from "../atoms/BannerImage.svelte";
	import Avatar from "../atoms/Avatar.svelte";
	import Card from "../atoms/Card.svelte";
	import Group from "../atoms/Group.svelte";
	import SurfaceSection from "../atoms/SurfaceSection.svelte";
	import Title from "../atoms/Title.svelte";
	import Description from "../atoms/Description.svelte";
	import { createEventDispatcher } from "svelte";

	const bm = new BEM('UI-PageHeading');
	const dispatch = createEventDispatcher();

	bm.append($$props.class);
	export let image: string;
	export let noImage = false;
	export let avatar: string;
	export let name: string;
	export let description: string;
	export let extra: string[] = []
	export let extraSeparator = ' | ';

	const onClickAvatar = () => {
		dispatch("clickAvatar")
	};
</script>
<header class={bm.toString()} style={$$props.style}>
	<BannerImage {noImage} {image}/>
	<SurfaceSection>
		<Group spaceBetween class="UI-PageHeading__content">
			<div>
				<Card marginBottom inline>
					<Avatar big image={avatar} on:click={onClickAvatar} size="xxl"/>
				</Card>
				<Title title="{name}"></Title>
				<Description {description}/>
				{#if extra}
					<span>{extra.join(extraSeparator)}</span>
				{/if}
			</div>
			<div class="actions">
				<slot name="actions"></slot>
			</div>
		</Group>
	</SurfaceSection>
</header>
<style lang='scss'>
	.UI-PageHeading {
		:global(.UI-PageHeading__content) {
			margin-top: -2rem;
			top: -70px;
			margin-bottom: -70px;
			position: relative;
		}
	}

	span {
		color: var(--ui-text-color);
		font-weight: var(--ui-text-weight);
	}
</style>
