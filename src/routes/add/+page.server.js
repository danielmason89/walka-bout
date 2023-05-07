import validateEvent from '$lib/validators/event.validator.js';
import { fail, redirect } from '@sveltejs/kit';
import { addEvent } from '../../lib/firebase/database.server.js';

export const actions = {
	default: async ({ request, locals }) => {
		const formData = await request.formData();
		const data = await validateEvent(formData);
		if (!data.success) {
			return fail(422, data);
		}
		const eventId = await addEvent(data.event, locals.user.id);

		throw redirect(303, `/event/${eventId}`);
	}
};
