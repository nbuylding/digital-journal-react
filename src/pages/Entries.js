import React from 'react';
import EntryList from '../components/EntryList';
import {useLoaderData} from 'react-router-dom';

export default function Entries() {
	const entries = useLoaderData();
	return <EntryList entries={entries} />;
}

export function loader() {
	return fetch(
		'https://daily-journal-app-3bfeb-default-rtdb.firebaseio.com/react-entry.json'
	);
}
