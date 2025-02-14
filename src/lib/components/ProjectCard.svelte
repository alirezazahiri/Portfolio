<script lang="ts">
	import type { Project } from '@/lib/types/project';

	export let project: Project;
</script>

<div class="block rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/10">
	<h3 class="mb-2 text-lg font-semibold">{project.title}</h3>
	<p class="text-white/60">{project.technologies.join(', ')}</p>
	<a
		href={project.opensource ? project.link : project.website}
		class="text-white/30 underline underline-offset-4 transition-all duration-500 hover:text-white/50 hover:underline-offset-2"
		>{project.opensource ? 'View Source' : 'View Website'}</a
	>
</div>
