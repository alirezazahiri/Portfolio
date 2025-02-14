<script lang="ts">
	import type { Experience } from '@/lib/types/experience';
	import { formatDate } from '@/lib/utils/date';
	import pretty from 'pretty-ms';

	export let experience: Experience;
</script>

<div class="block space-y-4 rounded-lg bg-white/5 p-6 transition-colors hover:bg-white/10">
	<a href={experience.link} class="text-lg font-semibold" target="_blank">{experience.title}</a>
	<div class="flex flex-col justify-center gap-2">
		<p class="text-white/60">{experience.type}</p>
		<span class="text-white/60"
			>{formatDate(experience.from)} - {experience.to ? formatDate(experience.to) : 'Present'} ({pretty(
				(experience.to ? experience.to.getTime() : Date.now()) - experience.from.getTime(),
				{
					compact: true
				}
			)})</span
		>
		<!-- <p class="text-white/60">{experience.description}</p> -->
	</div>
</div>
