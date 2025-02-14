<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		if (typeof window !== 'undefined') {
			const particlesJS = (window as any).particlesJS;

			if (particlesJS) {
				particlesJS.load('particles-js', 'assets/particles.json', function () {
					console.log('callback - particles.js config loaded');
				});
			}
		}
	});
</script>

<div class="fixed inset-0 -z-10 overflow-hidden bg-black">
	<!-- svelte-ignore element_invalid_self_closing_tag -->
	<div
		id="particles-js"
		class="absolute inset-0"
		style="
	background-image: linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
	linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
	background-size: 20px 20px;
	"
	/>
</div>
