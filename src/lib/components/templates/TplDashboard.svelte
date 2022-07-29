<script lang="ts">
	import { BEM } from "$lib/models/BEM";
	import Menubar from "../molecules/Menubar.svelte";
	import { TMenuBarItems } from "../../interfaces";
	import { writable } from "svelte/store";
	import { ITPLDashboardStore } from "../../interfaces/ITPLDashboardStore";
	import { setContext } from "svelte";
	import { key } from "../../context/tplDashboard";
	import Button from "../atoms/Button.svelte";
	import Group from "../atoms/Group.svelte";
	import Sidebar from "../atoms/Sidebar.svelte";

	const bm = new BEM('Tpl-Dashboard');
	bm.append($$props.class);

	export let logo: string;
	export let logoName: string;
	export let menuBar: TMenuBarItems = [];
	export let showAside = true;
	export let isFixed = false;
	export let sidebarPaddingContent = true;

	const state = writable<ITPLDashboardStore>({
		showAside,
	});

	const onToggleAside = () => {
		state.update(prv => ({
			...prv,
			showAside: !prv.showAside,
		}));
	}
	setContext(key, {
		state,
		onToggleAside,
	})
	$: openAside = $state.showAside;
</script>

<div class={bm.toString()} style={$$props.style} class:showAside={openAside}>
	<div>
		<Menubar {isFixed} items={menuBar} isMenu theme="white" class="menuBar">
			<div slot="start">
				<Group gap="20">
					<Button on:click="{onToggleAside}" theme="{openAside?'primary':''}" isIcon
							icon="fa fa-bars"></Button>
					<img class="logo" src="{logo}" alt="{logoName}">
				</Group>
			</div>
			<div slot="end">
				<slot {openAside} name="navbarEnd"></slot>
			</div>
		</Menubar>
		<section>
			<slot/>
		</section>
	</div>
	<Sidebar paddingContent={sidebarPaddingContent} showHeader="{false}">
		<slot name="sidebar" {openAside}></slot>
	</Sidebar>
</div>

<style lang='scss'>
	.Tpl-Dashboard {
		display: flex;

		> div {
			width: 100%;
		}

		:global(.menuBar) {
			height: var(--ui-co-menubar_height);
			//grid-column: 1/-1;flex:1
			flex: 1;
		}

		:global(.UI-Sidebar) {
			order: -1;
			flex: 0 var(--aside, 0);
			width: 100%;
			height: 100vh;
		}
	}

	.showAside {
		--aside: 300px;
	}

	section {
		height: calc(100vh - var(--ui-co-menubar_height));
		overflow: auto;
		background: whitesmoke;
	}

	.logo {
		max-height: var(--ui-co-menubar_height);
		position: relative;
	}
</style>
