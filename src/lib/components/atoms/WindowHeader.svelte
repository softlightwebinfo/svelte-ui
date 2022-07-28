<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Rounded from './Rounded.svelte';
	import { BEM } from "../../models/BEM";

	const dispatch = createEventDispatcher();
	const onClickClose = () => dispatch('close');
	const onClickMinimize = () => dispatch('minimize');
	const onClickMaximize = () => dispatch('maximize');
	export let title = '';
	const bm = new BEM('UI-WindowHeader')
	bm.append($$props.class)
</script>

<div class="{bm.toString()}" style={$$props.style }>
	<div class="WindowHeader__left">
		<Rounded theme={'danger'} on:click={onClickClose}/>
		<Rounded theme={'warning'} on:click={onClickMinimize}/>
		<Rounded theme={'success'} on:click={onClickMaximize}/>
	</div>
	<div>{title}</div>
</div>

<style lang="scss">
	.UI-WindowHeader {
		border-color: rgba(31, 41, 55, 1);
		border-bottom-width: 1px;
		padding: 0.75rem 1rem;
		gap: 10px;
		display: flex;
		align-items: center;

		&__left {
			display: flex;
			gap: 5px;
		}
	}
</style>
