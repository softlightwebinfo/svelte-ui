<script lang="ts">
	export let image: string;
</script>

<section
	class="UI-Parallax"
	style="{$$props.style}"
	style:background="url({image}) 100% 0% fixed no-repeat"
>
	<div class={'UI-Parallax__content'}>
		<slot/>
	</div>
</section>

<style lang="scss">
	.UI-Parallax {
		height: 100%;
		padding: 100px 0;
		position: relative;
		background-size: cover;
		background-attachment: fixed;
		background-repeat: no-repeat;

		&__content {
			z-index: 1;
			position: relative;
		}

		&::after {
			position: absolute;
			content: '';
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 0;
			background: rgba(0, 0, 0, 0.8);
		}

		:global(.Arrow),
		:global(.SlickArrow) {
			--border: white !important;

			:global(i) {
				color: white !important;
			}
		}

		:global(.UI-VideoPremium) {
			--ui-dark: white;
		}
	}
</style>
