<script lang="ts">
	export let left: boolean = false;
</script>

<i class="fa fa-chevron-{left ? 'left' : 'right'}" />

<style lang="scss">
	i {
		margin: 0 0.5rem 0 0.5rem;
		color: #495057;
	}
</style>
