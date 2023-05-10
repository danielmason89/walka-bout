import { getEvents } from '../lib/firebase/database.server.js';

export async function load({ locals, url }) {
	const page = url.searchParams.get('page') || 1;
	const { events, next, previous } = await getEvents(locals?.user?.id, +page);
	return {
		events,
		next,
		previous,
		page
	};
}
