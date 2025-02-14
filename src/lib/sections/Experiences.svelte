<script lang="ts">
	import ExperienceCard from '@/lib/components/ExperienceCard.svelte';
	import type { Experience } from '@/lib/types/experience';

	export const { experiences }: { experiences: Experience[] } = $props();
</script>

<section>
	<h2 class="mb-8 text-2xl font-bold">Experiences</h2>
	<p class="mb-8 text-white/60">My work experience</p>

	<div class="space-y-4">
		{#each experiences as experience (experience.id)}
			<ExperienceCard {experience} />
		{/each}
	</div>
</section>
