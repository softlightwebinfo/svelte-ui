<script lang="ts">
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Slider from "../lib/components/atoms/Slider.svelte";
</script>

<Meta
	title="Atoms/Slider"
	component={Slider}
	argTypes={{

	}}
/>

<Template let:args>
	<Slider {...args}/>
</Template>

<Story name="Default" args={{value:10}}/>
