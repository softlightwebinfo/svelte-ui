<script lang="ts">
	import Card from './../lib/components/atoms/Card.svelte';
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import CardBody from '$lib/components/atoms/CardBody.svelte';
	import CardTitle from '$lib/components/atoms/CardTitle.svelte';
	import CardSubTitle from '$lib/components/atoms/CardSubTitle.svelte';
	import CardContent from '$lib/components/atoms/CardContent.svelte';
	import CardFooter from '$lib/components/atoms/CardFooter.svelte';
	import Button from '$lib/components/atoms/Button.svelte';

	let count = 0;

	function handleClick() {
		count += 1;
	}
</script>

<Meta title="Atoms/Card" component={Card} argTypes={{}} />

<Template let:args>
	<Card {...args}>
		<CardBody>
			<CardTitle>Advanced Card</CardTitle>
			<CardSubTitle>Subtitle</CardSubTitle>
			<CardContent>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
				error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam
				nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
			</CardContent>
			<CardFooter>
				<Button theme="primary" label="Save" icon="fa fa-check" />
				<Button label="Cancel" icon="fa fa-times" />
			</CardFooter>
		</CardBody>
	</Card>
</Template>

<Story name="Default" args={{ style: 'max-width: 400px' }} />
