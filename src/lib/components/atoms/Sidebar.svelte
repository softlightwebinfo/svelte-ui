<script lang="ts">
	import { BEM } from "../../models/BEM";
	import { createEventDispatcher } from "svelte";
	import Button from '$lib/components/atoms/Button.svelte'

	const dispatch = createEventDispatcher();
	const bm = new BEM('UI-Sidebar')
	bm.append($$props.class)

	export let title = ''
	export let open = true;
	export let showHeader = true;
	export let paddingContent = true;

	const onClose = () => dispatch('close')
</script>
<aside class:open class="{bm.toString()}" style="{$$props.style}" class:paddingContent>
	{#if showHeader}
		<header>
			<span>{title}</span>
			<div class="actions">
				<slot name="headerActions"></slot>
				<Button isIcon rounded icon="fa fa-times" on:click={onClose}/>
			</div>
		</header>
	{/if}
	<section>
		<slot/>
	</section>
	{#if $$slots.footer}
		<footer>
			<slot name="footer"></slot>
		</footer>
	{/if}
</aside>
<style lang='scss'>
	aside {
		background: var(--ui-white);
		color: #495057;
		border: 0 none;
		box-shadow: 0 1px 3px rgb(0 0 0 / 30%);
		pointer-events: auto;
		display: flex;
		flex-direction: column;
		transform: translateZ(0);
		position: relative;
		height: 100%;
		transition: all 0.3s ease-in-out;
	}

	.open {
		width: var(--ui-co-sidebar_width, 20rem);
	}

	header {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.actions {
		margin-left: auto;
	}

	header {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex-shrink: 0;
		padding: 1.25rem;
	}

	section {
		overflow-y: auto;
		flex-grow: 1;

		width: 100%;
		height: 100%;
		padding-top: 0;
	}

	aside {
		&:not(.paddingContent) {
			section {
				padding: 0;
			}
		}
	}
</style>
