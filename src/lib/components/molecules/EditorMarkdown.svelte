<script lang="ts">
	import { BEM } from '$lib/models/BEM';
	import { marked } from 'marked';
    
	const bm = new BEM('UI-EditorMarkdown');
	export let value: string = '';
	export let cols: number = 30;
	export let rows: number = 10;
	export let name: string = 'editor';
	$: markdown = marked(value);
</script>

<div class={bm.toString()}>
	<aside>
		<textarea {name} bind:value {cols} {rows} />
	</aside>
	<section>
		{@html markdown}
	</section>
</div>

<style lang="scss">
	div {
		display: flex;
		height: var(--ui-co-editor-markdown__height, 100vh);
		gap: 20px;
	}
	textarea {
		width: 100%;
		height: 100%;
		background-color: var(--ui-dark);
		color: var(--ui-white);
		padding: 10px;
	}
	aside,
	section {
		flex: 1;
	}
</style>
