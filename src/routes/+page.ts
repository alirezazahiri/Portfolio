export async function load({ fetch }) {
	const expResponse = await fetch('/api/experiences');
	const experiences = await expResponse.json();

	const projResponse = await fetch('/api/projects');
	const projects = await projResponse.json();

	return {
		experiences,
		projects
	};
} 