import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Root from './pages/Root';
import Homepage from './pages/Homepage';
import Entries from './pages/Entries';
import Posts from './pages/Posts';

import {loader as entryLoader} from './pages/Posts';
import {loader as entriesLoader} from './pages/Entries';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Root />,
			children: [
				{
					index: true,
					element: <Homepage />,
				},
				{
					path: '/entries',

					children: [
						{
							index: true,
							element: <Entries />,
							loader: entriesLoader,
						},
						{
							path: ':id',
							element: <Posts />,
							loader: entryLoader,
						},
					],
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
