<script lang="ts">
	export let icon: string = '';
	export let iconRight: string = '';
	export let label: string = '';
	export let href: string = '';
</script>

<a {href} class="UI-MenuItemLink" on:click on:dblclick>
	{#if icon}
		<span class="icon {icon}" />
	{/if}
	{#if label}
		<span class="label">{label}</span>
	{/if}
	{#if iconRight}
		<span class="iconRight {iconRight}" />
	{/if}
</a>

<style lang="scss">
	a {
		text-decoration: none;
		display: flex;
		align-items: center;
		transition: box-shadow 0.2s;
		border-radius: var(--ui-radius);
	}
	.icon,
	.iconRight {
		color: #6c757d;
	}
	.label {
		color: #495057;
	}
</style>
