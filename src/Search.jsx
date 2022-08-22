import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Gallery from './Gallery';
import SearchForm from './SearchForm';
import Container from 'react-bootstrap/Container';
import './Search.css'

function Search({ searchOptions }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const requestedSearch = searchParams.get('searchString');
	const [searchString, setSearchString] = useState(requestedSearch || '');
	const [lastSearch, setLastSearch] = useState('');
    const [searchLength, setSearchLength] = useState(0);
	const [galleryImages, setGalleryImages] = useState([]);
	const [search, setSearch] = useState(false);
    
    const [inputs, setInputs] = useState({searchString:"", searchLength:0});
	
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

	const handleSubmit = (event) => {
		event.preventDefault();
		getData(inputs.searchString, inputs.searchLength);
	};

	const getData = (searchString, searchLength) => {
		if (searchString) {
			const url = `${searchOptions.url}/collection?key=${
				searchOptions.key
			}&q=${inputs.searchString.toLowerCase()}&ps=${inputs.searchLength}`;
			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					setGalleryImages(res.artObjects);
					setLastSearch(inputs.searchString);
					setSearchParams({ searchString });
					setSearch(true);
					setSearchString('');
                    setSearchLength(0);
				})
				.catch(console.error);
		}
	};

	useEffect(() => {
		if (requestedSearch) {
			getData(requestedSearch);
		} else {
			setSearchParams({});
		}
		// eslint-disable-next-line
	}, [requestedSearch]);

	return (
		<Container>
			<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={inputs.searchString}
                searchLength={inputs.searchLength}
			/>
			{search && (requestedSearch || lastSearch) && !!galleryImages.length && (
				<>
                <div className='SearchStyle'>
					<p >
						Showing results for{' '}
						<span style={{ fontStyle: 'italic' }}>{lastSearch}:</span>{' '}
					</p>
                </div>
					<Gallery
						images={galleryImages}
						getGalleryImages={getData}
						searchOptions={searchOptions}
					/>
				</>
			)}
			{search && !galleryImages.length && (
				<p>
					No results found for{' '}
					<span style={{ fontStyle: 'italic' }}>{lastSearch}</span>. Please try
					another search
				</p>
			)}
		</Container>
	);
}

export default Search;