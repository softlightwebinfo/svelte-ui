<script lang="ts">
	import { BEM } from "$lib/models/BEM";

	const bm = new BEM('UI-BannerImage');
	bm.append($$props.class);
	export let image: string;
	export let noImage = false;
</script>
<div
	class={bm.toString()} style={$$props.style}
	style:--ui-co-banner-image_image="var({image})">
	{#if !noImage}
		<img src="{image}" alt="">
	{/if}
</div>
<style lang='scss'>
	.UI-BannerImage {
		height: var(--ui-co-banner_height, 200px);
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 0% 0%;
		background-image: var(--ui-co-banner-image_image);
		width: 100%;
	}

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
</style>
