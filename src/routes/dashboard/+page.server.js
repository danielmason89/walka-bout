import { getEventsForUser } from '../../lib/firebase/database.server';

export async function load({ locals }) {
	const events = await getEventsForUser(locals.user.id);

	return {
		events
	};
}
