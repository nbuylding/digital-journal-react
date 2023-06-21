import React, {useState} from 'react';
import classes from './JournalForm.module.css';

export default function JournalForm() {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	function titleChangeHandler(e) {
		setTitle(e.target.value);
	}

	function contentChangeHandler(e) {
		setContent(e.target.value);
	}

	function clickHandler() {
		fetch(
			'https://daily-journal-app-3bfeb-default-rtdb.firebaseio.com/react-entry.json',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					title: title,
					post: content,
					date: new Date().toLocaleDateString(),
				}),
			}
		);
		setIsSubmitting(true);
		// console.log('done');
	}

	function clearFields() {
		setContent('');
		setTitle('');
	}

	function submitHandler(e) {
		e.preventDefault();
		clearFields();
	}

	return (
		<div className={classes.container}>
			<h1>Write your daily entry here:</h1>
			<form onSubmit={submitHandler} className={classes.form}>
				<div>
					<label htmlFor='title'>entry title: </label>

					<input
						id='title'
						type='text'
						value={title}
						onChange={titleChangeHandler}
					/>
				</div>
				<textarea
					value={content}
					onChange={contentChangeHandler}
				></textarea>
				<button type='submit' onClick={clickHandler}>
					Submit
				</button>
				{isSubmitting && <p>Successfully submitted!</p>}
			</form>
		</div>
	);
}
