<script lang="ts">
	import Modal from '@/lib/components/Modal.svelte';
	import Popover from '@/lib/components/Popover.svelte';
	import { socials } from '@/lib/constants/socials';

	let isPopoverOpen = false;
	let showModal = false;
	let anchorButton: HTMLElement;

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}
</script>

<header class="mb-16 flex items-center justify-evenly lg:justify-between">
	<div class="flex items-center space-x-2">
		<a href="/" class="text-white/80 transition-colors hover:text-white">Hello, there 👋</a>
		<button
			onclick={openModal}
			class="rounded-full bg-white/10 px-3 py-1 text-sm transition-colors hover:bg-white/20"
		>
			Let's get in touch →
		</button>
	</div>

	<nav class="hidden items-center space-x-4 lg:flex">
		{#each socials as social (social.label)}
			<a href={social.href} target="_blank" class="ref-link">
				{social.label}
			</a>
		{/each}

		<a href="https://github.com/alirezazahiri" target="_blank" class="ref-link">Github</a>
		<a href="/cv" class="ref-link">CV</a>
	</nav>

	<button
		bind:this={anchorButton}
		onclick={() => (isPopoverOpen = true)}
		class="rounded-full bg-white/10 px-4 py-1 text-sm hover:bg-white/20 lg:hidden"
	>
		MENU
	</button>
</header>

<Popover
	isOpen={isPopoverOpen}
	onClose={() => (isPopoverOpen = false)}
	anchor={anchorButton}
	position="bottom"
>
	<div class="flex flex-col gap-2">
		{#each socials as social (social.label)}
			<a href={social.href} target="_blank" class="ref-link">
				{social.label}
			</a>
		{/each}

		<a href="https://github.com/alirezazahiri" target="_blank" class="ref-link">Github</a>
		<a href="/cv" class="ref-link">CV</a>
	</div>
</Popover>

<Modal isOpen={showModal} onClose={closeModal} title="Socials">
	<div class="flex flex-col gap-2">
		{#each socials as social (social.label)}
			<a
				href={social.href}
				target="_blank"
				class="rounded-lg border border-white/10 p-4 transition-colors hover:bg-white/10"
			>
				<div class="flex items-center gap-4 space-x-2">
					<img src={social.icon} alt={social.label} class="rounded-full bg-white/60 p-2" />
					{social.label}
				</div>
			</a>
		{/each}
	</div>
</Modal>

<style>
	.ref-link {
		font-size: 0.9rem;
		@apply text-white/60 transition-colors;
	}
	.ref-link:hover {
		@apply text-white lg:scale-105;
		text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
		transition: all 0.2s ease;
	}
</style>
