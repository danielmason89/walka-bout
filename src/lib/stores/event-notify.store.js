import { readable } from 'svelte/store';
import { query, collection, onSnapshot, orderBy, limit, where } from 'firebase/firestore';
import { db } from '$lib/firebase/firebase.client';

export default readable(null, (set) => {
	const currentTimeStamp = Date.now() / 1000;
	const q = query(
		collection(db, 'events'),
		where('created_at', '>', currentTimeStamp),
		orderBy('created_at', 'desc'),
		limit(1)
	);

	const unsub = onSnapshot(q, (snapshot) => {
		if (snapshot.docs.length !== 1) return;
		if (snapshot.docChanges().find((d) => d.type === 'added')) {
			const event = snapshot.docs[0].data();
			set({ ...event, id: snapshot.docs[0].id });
		}
	});
	return () => {
		unsub();
	};
});
