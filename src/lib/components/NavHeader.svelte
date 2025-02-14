<script>
	import { page } from '$app/stores';
</script>

<header class="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-fit">
	<nav
		class="mx-auto bg-white/10 backdrop-blur-md relative px-3"
		style="clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%);"
	>
		<ul class="flex items-center justify-center">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/blogs' ? 'page' : undefined}>
				<a href="/blogs">Blogs</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		@apply hidden lg:flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li:hover {
		text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
		transform: scale(1.05);
		transition: all 0.2s ease;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
