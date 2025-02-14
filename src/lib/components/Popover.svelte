<script lang="ts">
	import { fade, scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let isOpen = false;
	export let onClose: () => void;
	export let anchor: HTMLElement | null = null;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'bottom';

	let popoverElement: HTMLElement;

	$: if (isOpen && anchor && popoverElement) {
		positionPopover();
	}

	function positionPopover() {
		if (!anchor || !popoverElement) return;

		const anchorRect = anchor.getBoundingClientRect();
		const popoverRect = popoverElement.getBoundingClientRect();

		let top = 0;
		let left = 0;

		switch (position) {
			case 'bottom':
				top = anchorRect.bottom + 8;
				left = anchorRect.left + (anchorRect.width - popoverRect.width) / 2;
				break;
			case 'top':
				top = anchorRect.top - popoverRect.height - 8;
				left = anchorRect.left + (anchorRect.width - popoverRect.width) / 2;
				break;
			case 'left':
				top = anchorRect.top + (anchorRect.height - popoverRect.height) / 2;
				left = anchorRect.left - popoverRect.width - 8;
				break;
			case 'right':
				top = anchorRect.top + (anchorRect.height - popoverRect.height) / 2;
				left = anchorRect.right + 8;
				break;
		}

		// Ensure popover stays within viewport
		const viewport = {
			width: window.innerWidth,
			height: window.innerHeight
		};

		left = Math.max(8, Math.min(left, viewport.width - popoverRect.width - 8));
		top = Math.max(8, Math.min(top, viewport.height - popoverRect.height - 8));

		popoverElement.style.top = `${top}px`;
		popoverElement.style.left = `${left}px`;
	}

	function handleClickOutside(event: MouseEvent) {
		if (
			popoverElement &&
			!popoverElement.contains(event.target as Node) &&
			anchor !== event.target &&
			!anchor?.contains(event.target as Node)
		) {
			onClose();
		}
	}

	function handleEscape(event: KeyboardEvent) {
		if (event.key === 'Escape' && isOpen) {
			onClose();
		}
	}
</script>

<svelte:window on:keydown={handleEscape} />

{#if isOpen}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="fixed inset-0 z-40" on:click={handleClickOutside}>
		<div
			bind:this={popoverElement}
			class="fixed z-50 min-w-fit rounded-lg border border-white/10 bg-black/35 p-4 shadow-xl backdrop-blur-sm"
			transition:scale={{
				duration: 200,
				easing: quintOut,
				start: 0.95
			}}
		>
			<div class="popover-content">
				<slot />
			</div>
		</div>
	</div>
{/if}

<style>
	.popover-content {
		max-height: calc(100vh - 100px);
		overflow-y: auto;
	}
</style>
