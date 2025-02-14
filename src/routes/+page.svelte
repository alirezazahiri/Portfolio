<script lang="ts">
	import Header from '@/lib/sections/Header.svelte';
	import Projects from '@/lib/sections/Projects.svelte';
	import Experiences from '@/lib/sections/Experiences.svelte';
	import Hero from '@/lib/sections/Hero.svelte';
	import type { Experience } from '@/lib/types/experience';
	import type { Project } from '@/lib/types/project';

	export let data: { experiences: Experience[]; projects: Project[] };
	const { experiences: _experiences, projects } = data;

	const experiences = _experiences.map((experience) => ({
		...experience,
		from: new Date(experience.from),
		to: experience.to ? new Date(experience.to) : null
	}));

	console.log(projects);
</script>

<div class="min-h-screen">
	<div>
		<div class="container mx-auto max-w-6xl">
			<Header />
			<Hero />
		</div>
		<div
			class="mt-24 border-y
		 border-white/10 bg-slate-400/5 backdrop-blur-sm"
		>
			<div class="container mx-auto grid max-w-6xl grid-cols-1 gap-12 py-12 md:grid-cols-2">
				<Projects {projects} />
				<Experiences {experiences} />
			</div>
		</div>
	</div>
</div>
