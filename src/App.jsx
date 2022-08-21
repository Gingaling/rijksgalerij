import React, { useState } from 'react';
import data from './data.json';
import { Routes, Route, Navigate } from 'react-router-dom';
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';

function App() {
	const [searchOptions, setSearchOptions] = useState({
		key: process.env.REACT_APP_RIJKS_KEY,
		url: 'https://www.rijksmuseum.nl/api/en/',
		numberOfResults: 50
	});
	return (
		<Container>
			<Navigation />
			<main>
				<Routes>
					<Route path="/home" element={<CarouselContainer data={data} />} />
				</Routes>
			</main>
		</Container>
	);
}

export default App;
