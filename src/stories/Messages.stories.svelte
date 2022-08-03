<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Messages from "../lib/components/molecules/Messages.svelte";
	import Button from "../lib/components/atoms/Button.svelte";
	import { generateRandom } from "../lib/functions/random";

	let actions;
</script>

<Meta
	title="Molecules/Messages"
	component={Messages}
	argTypes={{

	}}
/>

<Template let:args>
	<Button
		icon="fa fa-eye"
		theme="primary"
		on:click={() => {
			const data = ['primary','success','info','danger','warning']
			const rand = Math.round(generateRandom(data.length-1,0));
			actions.call('Esto es un mensaje de prueba', {
				theme: data[rand],
			})
		}}
	>
		Call
	</Button>
	<Messages {...args} bind:actions/>
</Template>

<Story name="Default" args={{  }}/>
