<script lang="ts">
	import { BEM } from '$lib/models/BEM';

	const bm = new BEM('UI-Checkbox');
	bm.append($$props.class);

	export let checked: boolean = false;
	export let id: string = '';
	export let disabled: boolean = false;
	export let value: string = '';
</script>

<label class={bm.toString()} class:checked class:disabled on:click>
	<input type="checkbox" bind:value bind:checked {id} {disabled} on:change />
	<div class="box">
		<span class="icon {checked ? 'fa fa-check' : 'fa fa-empty'}" />
	</div>
	<slot />
</label>

<style lang="scss">
	$s: 22px;
	.UI-Checkbox {
		display: inline-flex;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		vertical-align: bottom;
		position: relative;
		+ :global(.UI-Label),
		.box + :global(*) {
			margin-left: 10px;
		}
	}
	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid #ced4da;
		background: #ffffff;
		width: $s;
		height: $s;
		color: #495057;
		border-radius: 6px;
		transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
	}
	.disabled {
		opacity: var(--ui-disabled);
	}
	.checked {
		.box {
			border-color: #6366f1;
			background: #6366f1;
		}
		.icon {
			transition-duration: 0.2s;
			color: #ffffff;
			font-size: 14px;
		}
	}

	input {
		display: none;
	}
</style>
