import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css';

export default function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.link}>
					<li>
						<NavLink
							to='/'
							style={({isActive}) => {
								return {fontWeight: isActive ? '600' : '400'};
							}}
							end
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/entries'
							style={({isActive}) => {
								return {fontWeight: isActive ? '600' : '400'};
							}}
						>
							Entries
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
