<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import TitleDescription from "../molecules/TitleDescription.svelte";
	import Avatar from "./Avatar.svelte";
	import type { TSize } from "../../interfaces/TSize";
	import { createEventDispatcher } from "svelte";

	export let leftAvatar = '';
	export let leftIcon = '';
	export let rightIcon = '';
	export let rightAvatar = '';
	export let title = ''
	export let subTitle = ''
	export let avatarRounded = true;
	export let avatarSize: TSize = "xl";
	export let card = false;

	const bm = new BEM('UI-Tile');
	bm.append($$props.class);
	const dispatch = createEventDispatcher();
</script>
<div class={bm.toString()} style={$$props.style} class:card on:click>
	<div class="left">
		<slot name="left">
			{#if leftAvatar}
				<Avatar size="{avatarSize}" rounded={avatarRounded} image="{leftAvatar}"/>
			{:else if leftIcon}
				<i on:click|stopPropagation={() => dispatch("iconLeft")} class="{leftIcon}"></i>
			{/if}
		</slot>
	</div>
	<div class="center">
		<slot>
			<TitleDescription {title} description="{subTitle}"/>
		</slot>
	</div>
	<div class="right">
		<slot name="right">
			{#if rightAvatar}
				<Avatar size="{avatarSize}" rounded={avatarRounded} image="{rightAvatar}"/>
			{:else if rightIcon}
				<i on:click|stopPropagation={() => dispatch("iconRight")} class="{rightIcon}"></i>
			{/if}
		</slot>
	</div>
</div>
<style lang='scss'>
	.UI-Tile {
		display: flex;
		align-items: center;
		gap: 15px;

		:global(.UI-TitleDescription *) {
			margin: 0;
		}
	}

	i {
		font-size: 2.5rem;
	}

	.center {
		flex: 1
	}

	.right {
		i {
			font-size: 1.5rem;
		}
	}

	.card {
		@include Card();
		padding: var(--ui-padding);
	}
</style>
