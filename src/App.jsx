import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import data from './data.json';
import artObjects from './artObjects.json';

import Container from 'react-bootstrap/Container';
import CarouselContainer from './CarouselContainer';
import Navigation from './Navigation';
import About from './About';
import Gallery from './Gallery';
import Search from './Search';
import './App.css'

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
					<Route path="/home" element={<CarouselContainer data={data} />} />
					<Route path="/about" element={<About />} />
					<Route path="/gallery" element={<Gallery images={galleryImages} searchOptions={searchOptions} />} />
					<Route path="*" element={<Navigate to="/home" />} />
					<Route path="/search" element={<Search searchOptions={searchOptions} />} />;
				</Routes>
			</main>
		</Container>;
}

export default App;
