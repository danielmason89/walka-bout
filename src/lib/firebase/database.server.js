import { db } from '$lib/firebase/firebase.server';
import admin from 'firebase-admin';
import { PAGE_SIZE } from '$env/static/private';

export async function addEvent(event, userId) {
	//save to the firestore database
	const eventCollection = db.collection('events');

	const eventRef = await eventCollection.add({
		title: event.title,
		description: event.description,
		location: event.location,
		date: event.date,
		time: event.time,
		organizer: event.organizer,
		user_id: userId,
		created_at: admin.firestore.Timestamp.now().seconds,
		likes: 0
	});
	//update the doc in the firestore database

	//return the event id
	return eventRef.id;
}

export async function editEvent(id, form) {
	const eventRef = await db.collection('events').doc(id);
	await eventRef.update(form);
}

export async function getEvent(id, userId = null) {
	const eventRef = await db.collection('events').doc(id).get();

	if (eventRef.exists) {
		const user = userId ? await getUser(userId) : null;
		const likedEvent = user?.eventIds?.includes(id) || false;
		return { id: eventRef.id, ...eventRef.data(), likedEvent };
	}
}

export async function getEventsForUser(userId) {
	const user = await getUser(userId);
	const events = await db
		.collection('events')
		.orderBy('created_at', 'desc')
		.where('user_id', '==', userId)
		.get();

	return events.docs.map((d) => {
		const likedEvent = user?.eventIds?.includes(d.id) || false;

		return { id: d.id, ...d.data(), likedEvent };
	});
}

export async function getLikedEvents(userId) {
	const user = await getUser(userId);
	const eventIds = user?.eventIds || [];

	if (eventIds.length === 0) {
		return [];
	}

	const events = await db
		.collection('events')
		.where(admin.firestore.FieldPath.documentId(), 'in', eventIds)
		.get();

	return events.docs.map((d) => {
		return { id: d.id, ...d.data(), likedEvent: true };
	});
}

export async function getEvents(userId, page = 1) {
	const user = userId ? await getUser(userId) : null;
	const eventCount = await db.collection('events').count().get();
	const totalEvents = eventCount.data().count;
	const next = totalEvents > page * +PAGE_SIZE;
	const previous = page > 1;
	const events = await db
		.collection('events')
		.limit(+PAGE_SIZE)
		.offset((page - 1) * +PAGE_SIZE)
		.orderBy('created_at', 'desc')
		.get();

	const likedEvents = events.docs.map((d) => {
		const likedEvent = user?.eventIds?.includes(d.id) || false;
		return { ...d.data(), id: d.id, likedEvent };
	});
	return { events: likedEvents, next, previous };
}

export async function getUser(userId) {
	const user = await db.collection('users').doc(userId).get();
	return user?.data();
}

export async function toggleEventLike(eventId, userId) {
	const eventDoc = db.collection('events').doc(eventId);
	const userDoc = db.collection('users').doc(userId);

	const user = await userDoc.get();
	const userData = user.data();

	// unlike the event
	if (userData.eventIds && userData.eventIds.includes(eventId)) {
		await userDoc.update({
			eventIds: admin.firestore.FieldValue.arrayRemove(eventId)
		});
		await eventDoc.update({
			likes: admin.firestore.FieldValue.increment(-1)
		});
	}
	// like the event
	else {
		await userDoc.update({
			eventIds: admin.firestore.FieldValue.arrayUnion(eventId)
		});
		await eventDoc.update({
			likes: admin.firestore.FieldValue.increment(1)
		});
	}
	return await getEvent(eventId, userId);
}
