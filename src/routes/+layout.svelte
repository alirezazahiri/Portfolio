<script>
	import AnimatedBackground from '@/lib/components/AnimatedBackground.svelte';
	import NavHeader from '@/lib/components/NavHeader.svelte';
	import '@/app.css';
</script>

<AnimatedBackground />

<div class="app">
	<NavHeader />

	<main>
		<slot />
	</main>

	<footer>
		<p>created by <a href="https://github.com/alirezazahiri">alireza zahiri</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem 0 0;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
