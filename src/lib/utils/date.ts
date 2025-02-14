export const formatDate = (date: Date) => {
	return date.toLocaleString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
};
