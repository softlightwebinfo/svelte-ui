<script lang="ts">
	import { BEM } from '$lib/models/BEM';
	export let icon: string = '';
	export let iconRight: string = '';
	const bm = new BEM('UI-InputGroup');
	bm.append($$props.class);
</script>

<div class={bm.toString()}>
	{#if icon || $$slots.left}
		<span class="addon" on:click>
			<slot name="left">
				<i class={icon} />
			</slot>
		</span>
	{/if}
	<div class="input">
		<slot />
	</div>
	{#if iconRight || $$slots.right}
		<span class="addon" on:click>
			<slot name="right">
				<i class={iconRight} />
			</slot>
		</span>
	{/if}
</div>

<style lang="scss">
	div {
		display: flex;
		align-items: stretch;
		width: 100%;
	}
	.input {
		flex: 1 1 auto;
		> :global(*) {
			border-radius: 0;
			margin: 0;
		}
		&:last-child {
			> :global(*) {
				border-top-right-radius: var(--ui-radius);
				border-bottom-right-radius: var(--ui-radius);
			}
		}
	}
	.addon {
		background: #e9ecef;
		color: #6c757d;
		border-top: 1px solid #ced4da;
		border-left: 1px solid #ced4da;
		border-bottom: 1px solid #ced4da;
		padding: 0.75rem 0.75rem;
		min-width: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;

		+ .addon {
			border-left: 0 none;
		}
		&:first-child {
			border-top-left-radius: var(--ui-radius);
			border-bottom-left-radius: var(--ui-radius);
		}
		&:last-child {
			border-top-right-radius: var(--ui-radius);
			border-bottom-right-radius: var(--ui-radius);
		}
	}
</style>
