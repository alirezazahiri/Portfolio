<script lang="ts">
	import ProjectCard from '@/lib/components/ProjectCard.svelte';
	import type { Project } from '@/lib/types/project';

	export const { projects }: { projects: Project[] } = $props();
</script>

<section>
	<h2 class="mb-8 text-2xl font-bold">Projects</h2>
	<p class="mb-8 text-white/60">A few things I've been building</p>

	<div class="space-y-4">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
