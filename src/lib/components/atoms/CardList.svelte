<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import Title from "./Title.svelte";

	export let isBody = true
	export let headerBorder = false;
	export let title = ''

	const bm = new BEM('UI-CardList', {
		'UI-CardList--isBody': isBody
	});
	bm.append($$props.class);
</script>
<div class={bm.toString()} style={$$props.style} class:headerBorder class:isBody>
	{#if title}
		<header>
			<Title {title}></Title>
		</header>
	{/if}
	<div class="UI-CardList__content">
		<slot></slot>
	</div>
	{#if $$slots.footer}
		<footer>
			<slot name="footer">

			</slot>
		</footer>
	{/if}
</div>
<style lang='scss'>
	.UI-CardList {
		@include Card;
		$then: &;

		header {
			padding: 20px;


			:global(.UI-Title) {
				margin: 0;
			}
		}

		&.headerBorder {
			header {
				border-bottom: 1px solid gainsboro;
			}
		}

		&__content {
			:global(> *:not(:first-child)) {
				border-top: 1px solid gainsboro;
			}
		}

		&.isBody {
			#{$then}__content {
				:global(> *) {
					padding: 15px;
					margin: 0;
				}
			}
		}
	}
</style>
