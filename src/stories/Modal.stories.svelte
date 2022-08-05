<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Modal from "../lib/components/atoms/Modal.svelte";
	import Button from "../lib/components/atoms/Button.svelte";
	import Toolbar from "../lib/components/atoms/Toolbar.svelte";

	let show = false
</script>

<Meta
	title="Atoms/Modal"
	component={Modal}
	argTypes={{

	}}
/>

<Template let:args>
	<Button on:click={()=>(show=true)} icon="fa fa-user">Open</Button>
	<Modal {...args} bind:show>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
		magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
		pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
		laborum.
		<Toolbar end slot="footer">
			<Button icon="fa fa-times">No</Button>
			<Button theme="primary" icon="fa fa-check">Yes</Button>
		</Toolbar>
	</Modal>
</Template>

<Story name="Default" args={{ show ,title: "Header"}}/>
