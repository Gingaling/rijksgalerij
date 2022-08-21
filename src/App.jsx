import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import data from './data.json';
import artObjects from './artobjects.json';

import Container from 'react-bootstrap/Container';
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import About from './About';
import Gallery from './Gallery';

function App() {
	const [searchOptions, setSearchOptions] = useState({
		key: process.env.REACT_APP_RIJKS_KEY,
		url: 'https://www.rijksmuseum.nl/api/en/',
		numberOfResults: 50
	});
	const [galleryImages, setGalleryImages] = useState(artObjects);
	return <Container>
			<Navigation />
			<main>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/home" element={<CarouselContainer data={data} />} />
					<Route path="*" element={<Navigate to="/home" />} /> 
				</Routes>
			</main>
		</Container>;
};

export default App;
