import React, { useState } from 'react';
import data from './data.json';
import { Routes, Route, Navigate } from 'react-router-dom';
import CarouselContainer from './CarouselContainer';

function App() {
	const [searchOptions, setSearchOptions] = useState({
		key: process.env.REACT_APP_RIJKS_KEY,
		url: 'https://www.rijksmuseum.nl/api/en/',
		numberOfResults: 15
	});
	return (
		<main>
			<CarouselContainer data={data} />
		</main>
	);
}

export default App;
