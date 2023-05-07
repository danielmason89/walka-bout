import { getEvent, editEvent } from '$lib/firebase/database.server';
import { error, fail, redirect } from '@sveltejs/kit';
import validateEvent from '$lib/validators/event.validator';

export async function load({ params, locals }) {
	const event = await getEvent(params.id);

	if (!event) {
		throw error(404, { message: 'Event not found' });
	}
	if (event.user_id !== locals.user.uid) {
		throw error(403, { message: 'You are not authorized to edit this event' });
	}

	return { event };
}

export const actions = {
	default: async ({ request, locals, params }) => {
		const event = await getEvent(params.id);

		if (!event || event.user_id !== locals.user.uid) {
			throw error(403, { message: 'You are not authorized to edit this event' });
		}
		const formData = await request.formData();
		const data = await validateEvent(formData, true);

		if (!data.success) {
			return fail(422, data);
		}
		await editEvent(params.id, data.event, locals.user.uid);
		throw redirect(303, `/event/${params.id}`);
	}
};
