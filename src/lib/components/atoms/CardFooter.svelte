<script lang="ts">
	import { BEM } from '$lib/models/BEM';

	const bem = new BEM('UI-CardFootr');
	bem.append($$props.class);
</script>

<footer class={bem.toString()}><slot /></footer>

<style lang="scss">
	footer {
		padding: 1.25rem 0 0 0;
	}
</style>
