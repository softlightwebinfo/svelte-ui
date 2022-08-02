<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import Title from "../atoms/Title.svelte";
	import Description from "../atoms/Description.svelte";

	const bm = new BEM('UI-TitleDescription');
	bm.append($$props.class);
	export let title, description = '';
</script>
<div class={bm.toString()} style={$$props.style}>
	<Title {title}/>
	<Description {description}/>
</div>
<style lang='scss'>
	.UI-TitleDescription {
		:global(.UI-Title) {
			margin-bottom: .5rem;
		}
	}
</style>
