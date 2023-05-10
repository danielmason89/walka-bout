import yup from 'yup';

export default async function validate(formData) {
	const schema = yup.object({
		title: yup.string().required('Event Title is required').min(4).max(40),
		description: yup.string().required().min(4).max(200),
		location: yup.string().required('Please a valid location').min(4).max(40),
		date: yup.date().required('Please a valid date'),
		time: yup.string().required('Please a valid time'),
		organizer: yup.string().required('Please an organizer/s').max(40)
	});

	const data = {
		title: formData.get('title'),
		description: formData.get('description'),
		location: formData.get('location'),
		date: formData.get('date'),
		time: formData.get('time'),
		organizer: formData.get('organizer')
	};

	try {
		await schema.validate(data, { abortEarly: false });
		return { success: true, event: data };
	} catch (error) {
		const errors = error.inner.reduce((agg, e) => {
			if (!agg['error_' + e.path]) {
				agg['error_' + e.path] = e.message;
			}
			return agg;
		}, {});
		return { ...errors, ...data, success: false };
	}
}
