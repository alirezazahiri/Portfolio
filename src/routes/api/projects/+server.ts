import { json } from '@sveltejs/kit';

export async function GET() {
	const projects = [
		{
			id: '1',
			title: 'ClockTo',
			technologies: ['TypeScript', 'Next.js', 'Node.js', 'Material UI', 'Firebase'],
			website: 'https://clockto.com',
			opensource: false
		},
		{
			id: '2',
			title: 'DoCumulate',
			technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Python', 'FastAPI', 'Supabase'],
			website: 'https://documulate.com',
			opensource: false
		},
		{
			id: '3',
			title: 'Semester Scheduler',
			technologies: ['TypeScript', 'Next.js', 'Tailwind CSS'],
			link: 'https://github.com/alirezazahiri/semester-scheduler',
			website: 'https://nit-scheduler.vercel.app/',
			opensource: true
		},
		{
			id: '4',
			title: 'Qwest Services',
			technologies: ['Go', 'PostgreSQL'],
			link: 'https://github.com/basliqlabs/qwest-services',
			website: 'https://basliqlabs.github.io/qwest-docs/',
			opensource: true
		}
	];

	return json(projects);
}
