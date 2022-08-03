<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import Alert from "../atoms/Alert.svelte";
	import { IMessageAlert } from "../../interfaces/IMessageAlert";

	const bm = new BEM('UI-Messages');
	bm.append($$props.class);
	export let messages: IMessageAlert[] = [];
	export let timeout = 3000;

	const template = (message: string, options: IMessageAlert = {}) => {
		return {
			id: new Date().getTime(),
			message,
			...options,
		}
	}

	export let messageAppend = (message: string, options: IMessageAlert = {}) => {
		const data = template(message, options);
		messages = [data, ...messages];
	}

	export let actions = {
		call: (message: string, options: IMessageAlert = {}) => {
			messageAppend(message, options);
		},
		onClose: (id: number | string) => {
			messages = messages.filter(i => i.id != id);
		}
	};
</script>

<div class={bm.toString()} style={$$props.style}>
	{#each messages as message(message.id)}
		<Alert on:close={() => actions.onClose(message.id)} isCloseable {timeout} {...message}/>
	{/each}
</div>

<style lang='scss'>
	.UI-Messages {
		position: fixed;
		right: 20px;
		top: 20px;
		pointer-events: none;
	}
</style>
