import React from 'react';
import classes from './EntryItem.module.css';

export default function EntryItem({entry}) {
	return (
		<div className={classes.item}>
			<h1>{entry.title}</h1>
			<p className={classes.post}>{entry.post}</p>
			<h3>{entry.date}</h3>
		</div>
	);
}
