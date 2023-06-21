import React from 'react';
import {Outlet} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function Root() {
	return (
		<div>
			<MainNavigation />
			<main>
				<Outlet />
			</main>
		</div>
	);
}
