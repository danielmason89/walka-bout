import { getLikedEvents } from '$lib/firebase/database.server.js';

export async function load({ locals }) {
	const events = await getLikedEvents(locals.user.id);

	return {
		events
	};
}
