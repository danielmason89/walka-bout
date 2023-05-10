export function load({ locals }) {
	return {
		idLoggedIn: locals.user !== null
	};
}
