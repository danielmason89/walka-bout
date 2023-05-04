import { goto } from '$app/navigation';
import { setUser } from '$lib/firebase/database.client';
import { sendJWTToken } from '../firebase/auth.client';

export async function afterLogin(url, userId) {
	const route = url.searchParams.get('redirect') || '/';
	await setUser(userId);
	await sendJWTToken();
	await goto(route);
}
