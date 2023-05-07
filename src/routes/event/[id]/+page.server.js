import { error } from '@sveltejs/kit';
import { getEvent } from '../../../lib/firebase/database.server.js';

export async function load({ params, locals }) {
	const event = await getEvent(params.id, locals?.user?.id);

	if (!event) {
		throw error(404, { message: 'Event not found' });
	}

	return {
		event
	};
}
