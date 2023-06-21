import React from 'react';
import classes from './Quote.module.css';

export default function Quote() {
	return (
		<footer className={classes.footer}>
			<blockquote>
				“Worrying is stupid, it’s like walking around with an umbrella
				waiting for it to rain.”
			</blockquote>
		</footer>
	);
}
