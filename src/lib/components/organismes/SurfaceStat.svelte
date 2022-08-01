<script lang="ts">
	import Card from "../atoms/Card.svelte";
	import CardBody from "../atoms/CardBody.svelte";
	import Label from '../atoms/Label.svelte'
	import { BEM } from "../../models/BEM";
	import Group from "../atoms/Group.svelte";
	import Button from '../atoms/Button.svelte'
	import type { TThemeColor } from "../../interfaces/TThemeColor";

	const bm = new BEM('UI-SurfaceStat');
	bm.append($$props.class);
	export let title: string;
	export let value: string;
	export let icon: string;
	export let theme: TThemeColor = 'primary'
</script>
<Card class={bm.toString()} style={$$props.style}>
	<CardBody>
		<Group spaceBetween top>
			<section>
				<Label>{title}</Label>
				<div>{value}</div>
			</section>
			<Button isIcon {theme} {icon}></Button>
		</Group>
		<slot></slot>
	</CardBody>
</Card>
<style lang='scss'>
	.UI-SurfaceStat {

	}

	div {
		font-size: 1.8rem;
		margin-top: 10px;
	}
</style>
