<script lang="ts">
	import { BEM } from "../../models/BEM";
	import CardBody from "../atoms/CardBody.svelte";
	import Card from "../atoms/Card.svelte";
	import Button from "../atoms/Button.svelte";
	import type { TThemeColor } from "../../interfaces/TThemeColor";
	import Description from "../atoms/Description.svelte";

	const bm = new BEM('UI-SurfaceCard');
	bm.append($$props.class);
	export let title: string;
	export let description: string;
	export let image: string;
	export let buttonText: string;
	export let buttonUrl: string;
	export let buttonIcon: string;
	export let theme: TThemeColor = 'primary'
</script>
<Card class={bm.toString()} style={$$props.style}>
	<CardBody center>
		<img src="{image}" alt="{title}" {title}>
		<Description {description}/>
		<a href="{buttonUrl}">
			<Button {theme} icon="{buttonIcon}">{buttonText}</Button>
		</a>
		<slot></slot>
	</CardBody>
</Card>
<style lang='scss'>
	img {
		margin-left: auto;
		margin-bottom: 1.5rem;
		margin-right: auto;
		display: block;
	}
</style>
