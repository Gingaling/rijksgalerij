import React, { useState } from 'react';
import './Gallery.css'
import Detail from './Detail';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

const Gallery = ({ images, searchOptions }) => {
	const [error, setError] = useState(false);
	const [show, setShow] = useState(false);
	const [activeItem, setActiveItem] = useState(null);

	const handleShow = () => {
		setShow(true);
	};

	const handleClose = () => {
		setShow(false);
		setError(false);
		setActiveItem(null);
	};

	const handleError = () => {
		setError(true);
	};

	const getDetail = (itemId) => {
		fetch(`${searchOptions.url}/collection/${itemId}?key=${searchOptions.key}`)
			.then(res => res.json())
			.then(res => {
				setActiveItem(res);
			})
			.then(res => handleShow())
			.catch(err => {
				handleError();
				handleShow();
			});
	};

	if (!images) {
		return (
			<Container
				className="d-flex  justify-content-center align-items-center align-content-center"
				style={{ minHeight: '90vh' }}>
				<span style={{ paddingRight: '1em' }}>
					Loading results{'  '}
				</span>
				<Spinner animation="border" variant="dark" size="sm" />
			</Container>
		);
	}
	return (
		<Row xs={1} md={2} lg={3} xl={4} className="g-4">
			{images.map(object => {
				return (
					<Col key={object.id}>
						<Card id="CardStyle" className="h-100" key={object.id}>
							{object.webImage &&
								<Card.Img
									variant="top"
									src={object.webImage ? object.webImage.url : ''}
									alt={object.title}
								/>}
							<Card.Body>
								{object.webImage
									? ''
									: <Card.Title>No Image Available</Card.Title>}
								<Card.Text className="text-muted">
									{object.longTitle}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								<Button
									onClick={() => getDetail(object.objectNumber)}
									variant="outline-dark">
									Details
								</Button>
							</Card.Footer>
						</Card>
					</Col>
				);
			})}
			{(activeItem || error) &&
				<Detail
					objectDetail={activeItem}
					show={show}
					handleClose={handleClose}
					error={error}
				/>}
		</Row>
	);
};

export default Gallery;