<script lang="ts">
	import { BEM } from "../../models/BEM";
	import { slide } from "svelte/transition";

	const bm = new BEM('UI-Panel')
	bm.append($$props.class)

	export let header = ''
	export let toggleable = false;
	export let open = true;

	const onToggleable = () => {
		if (!toggleable) return false;
		open = !open;
	}
</script>
<div class="{bm.toString()}" style="{$$props.style}" class:toggleable class:open>
	{#if $$slots.header || header}
		<header on:click={onToggleable}>
			<slot name="header">
				<span>{header}</span>
				{#if $$slots.headerActions}
					<div class="actions">
						<slot name="headerActions"></slot>
					</div>
				{/if}
			</slot>
		</header>
	{/if}
	{#if open}
		<section transition:slide={{duration:300}}>
			<slot></slot>
		</section>
	{/if}
	{#if $$slots.footer}
		<footer>
			<slot name="footer"></slot>
		</footer>
	{/if}
</div>
<style lang='scss'>
	header, footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #dee2e6;
		padding: 1.25rem;
		background: #f8f9fa;
		color: #343a40;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;
		font-weight: bold;
	}

	.actions {
		margin-left: auto;
	}

	.toggleable {
		header {
			cursor: pointer
		}

		&:not(.open) {
			header {
				border-bottom-right-radius: 6px;
				border-bottom-left-radius: 6px;
			}
		}
	}

	section {
		padding: 1.25rem;
		border: 1px solid #dee2e6;
		background: var(--ui-white);
		color: #495057;
		border-bottom-right-radius: 6px;
		border-bottom-left-radius: 6px;
		border-top: 0 none;
	}
</style>
