import React from 'react';
import {useLoaderData} from 'react-router-dom';
import EntryItem from '../components/EntryItem';

export default function Posts() {
	const entry = useLoaderData();

	return <EntryItem entry={entry} />;
}

export function loader({params}) {
	const entryId = params.id;
	return fetch(
		`https://daily-journal-app-3bfeb-default-rtdb.firebaseio.com/react-entry/${entryId}.json`
	);
}
