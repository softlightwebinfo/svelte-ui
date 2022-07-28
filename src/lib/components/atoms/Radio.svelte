<script lang="ts">
	import { BEM } from '$lib/models/BEM';

	export let id = '';
	export let disabled = false;
	export let value = '';
	export let group;

	const bm = new BEM('UI-Radio');
	bm.append($$props.class);
</script>
<label class={bm.toString()} class:disabled on:click class:checked="{group==value}">
	<input {value} bind:group type="radio" {disabled} on:change>

	<div class="box">
		<span class="icon"/>
	</div>

	<slot/>
</label>

<style lang="scss">
	label {
		display: flex;
		align-items: center;
		gap: 5px;
		cursor: pointer;
	}

	input {
		display: none;
	}

	.box {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid #ced4da;
		background: var(--ui-white);
		width: 22px;
		height: 22px;
		color: #495057;
		border-radius: 50%;
		transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
	}

	.icon {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		transform: translateZ(0) scale(0.1);
		border-radius: 50%;
		visibility: hidden;
		width: 12px;
		height: 12px;
		transition-duration: 0.2s;
		background-color: var(--ui-white);
	}

	.checked {
		.box {
			border-color: var(--ui-primary);
			background: var(--ui-primary);

			.icon {
				transform: translateZ(0) scale(1);
				visibility: visible;
				width: 12px;
				height: 12px;
				transition-duration: 0.2s;
				background-color: #ffffff;
			}
		}
	}
</style>
