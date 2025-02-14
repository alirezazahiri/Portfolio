import { json } from '@sveltejs/kit';

export async function GET() {
	const experiences = [
		{
			id: '1',
			title: 'RSIMU - Front-End Engineer',
			location: 'United States - Remote',
			type: 'Full-Time, Remote',
			from: new Date('2024-01-01'),
			to: null,
			description: 'This is a description',
			link: 'https://rsimu.com/team'
		},
		{
			id: '2',
			title: 'Babol Noshirvani University of Technology - Front-End Developer',
			location: 'Mazandaran, Iran',
			type: 'Full-Time, On-Site',
			from: new Date('2023-01-12'),
			to: new Date('2024-01-01'),
			description: 'This is a description'
		},
		{
			id: '3',
			title: 'Dragonfly Technology Co. Ltd. - Front-End Developer',
			location: 'Beijing, China',
			type: 'Full-Time, Remote',
			from: new Date('2020-12-27'),
			to: new Date('2023-01-01'),
			description: 'This is a description'
		}
	];

	return json(experiences);
}
