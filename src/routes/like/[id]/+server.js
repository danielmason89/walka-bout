import { error, json } from '@sveltejs/kit';
import { getEvent, toggleEventLike } from '$lib/firebase/database.server.js';

export async function GET({ params, locals }) {
	if (!locals.user) {
		throw error(403, { message: 'You must be logged in to like a post' });
	}

	const event = await getEvent(params.id);
	if (!event) {
		throw error(404, { message: 'Event not found' });
	}

	try {
		const newEvent = await toggleEventLike(params.id, locals.user.id);
		return json({ ...newEvent });
	} catch (e) {
		console.log(e);
		throw error(500, { message: 'Server error' });
	}
}
