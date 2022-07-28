<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Col from "../lib/components/atoms/Col.svelte";
	import Row from "../lib/components/atoms/Row.svelte";
	import Card from "../lib/components/atoms/Card.svelte";
</script>

<Meta
	title="Atoms/Col"
	component={Col}
	argTypes={{

	}}
/>

<Template let:args>
	<Row>
		<Col lg="6">
			<Card>Columna numero 6</Card>
		</Col>
		<Col lg="4">
			<Card>Columna numero 4</Card>
		</Col>
		<Col lg="2">
			<Card>Columna numero 2</Card>
		</Col>
		<Col lg="12">
			<Card>Columna numero 12</Card>
		</Col>
	</Row>
</Template>

<Story name="Default" args={{ }}/>
