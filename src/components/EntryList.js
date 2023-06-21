import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './EntryList.module.css';

export default function EntryList() {
	const [loadedEntries, setLoadedEntires] = useState([]);

	useEffect(() => {
		fetch(
			'https://daily-journal-app-3bfeb-default-rtdb.firebaseio.com/react-entry.json'
		)
			.then((response) => response.json())
			.then((data) => {
				// console.log(data);

				const entries = [];
				for (const key in data) {
					entries.push({
						id: key,
						title: data[key].title,
						post: data[key].post,
						date: data[key].date,
					});
					// console.log(data[key]);
				}

				setLoadedEntires(entries);
			});
	}, []);

	return (
		<ul className={classes.list}>
			{loadedEntries.map((entry) => (
				<li key={entry.id}>
					<Link className={classes.link} to={entry.id}>
						{entry.title}
					</Link>
				</li>
			))}
		</ul>
	);
}
