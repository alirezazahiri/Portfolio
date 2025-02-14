<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	export let isOpen = false;
	export let onClose: () => void;
	export let title: string = '';

	function handleEscape(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			onClose();
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}

	onMount(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	});
</script>

<svelte:window on:keydown={handleEscape} />

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
		onclick={handleBackdropClick}
		transition:fade={{ duration: 200 }}
	>
		<div
			class="relative w-full max-w-sm lg:max-w-lg rounded-lg border border-white/10 bg-black/35 p-6 shadow-xl backdrop-blur-sm"
			transition:scale={{
				duration: 200,
				easing: quintOut,
				start: 0.95
			}}
		>
			{#if title}
				<h2 class="mb-4 text-xl font-semibold">{title}</h2>
			{/if}

			<button class="absolute right-4 top-4 text-white/60 hover:text-white" onclick={onClose}>
				✕
			</button>

			<div class="modal-content">
				<slot />
			</div>
		</div>
	</div>
{/if}

<style>
	.modal-content {
		max-height: calc(100vh - 200px);
		overflow-y: auto;
	}
</style>
