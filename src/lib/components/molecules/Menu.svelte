<script lang="ts">
	import type { TMenuBarItems } from '$lib/interfaces/TMenuBarItems';

	import MenuAtom from '../atoms/MenuAtom.svelte';
	import MenuList from './MenuList.svelte';
	export let items: TMenuBarItems = [];
</script>

<MenuAtom>
	<MenuList {items} />
</MenuAtom>

<style lang="scss">
</style>
