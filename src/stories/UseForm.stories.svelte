<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import { useForm } from "../lib/hooks/useForm";
	import Input from "../lib/components/atoms/Input.svelte";
	import FormGroup from "../lib/components/atoms/FormGroup.svelte";
	import InputPassword from "../lib/components/molecules/InputPassword.svelte";
	import Button from "../lib/components/atoms/Button.svelte";
	import Container from "../lib/components/atoms/Container.svelte";
	import Alert from "../lib/components/atoms/Alert.svelte";

	let ok = null;
	let {data, errors, handleSubmit, handleClear} = useForm({
		initialValues: {
			email: "juan@email.com",
			name: "Juan",
			password: "1234"
		},
		validations: {
			email: {
				required: {
					value: true,
					message: "Error en el email"
				}
			}
		},
		onSubmit: () => {
			ok = true;
			console.log($data);
		},
		onError: () => {
			ok = false;
			console.log($errors)
		}
	});
</script>

<Meta title="Hooks/UseForm" argTypes={{}}/>

<Template let:args>
	<Container style="padding-top: 40px;">
		{#if ok}
			<Alert theme="success" message="Success send form"/>
		{:else if ok != null}
			<Alert theme="danger" message="{Object.values($errors).map(i=>i)}"/>
		{/if}

		<form on:submit={handleSubmit}>
			{JSON.stringify($data)}
			<FormGroup label="Write your Name">
				<Input bind:value={$data.name} placeholder="Write your name"/>
			</FormGroup>
			<FormGroup label="Email">
				<Input type="email" bind:value={$data.email} placeholder="Write your email"/>
			</FormGroup>
			<FormGroup label="Password">
				<InputPassword bind:value={$data.password} placeholder="Write your password"/>
			</FormGroup>
			<Button type="button" on:click={handleClear} theme="danger" icon="fa fa-trash">Reset</Button>
			<Button theme="primary" icon="fa fa-chevron-right">Register user</Button>
		</form>
	</Container>
</Template>

<Story name="Default" args={{}}/>
