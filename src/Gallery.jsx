import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Gallery = ({ images }) => {
	if (!images) return null;
	return (
		<Row xs={1} md={2} lg={3} xl={4} className="g-4">
			{images.map(object => {
				return (
					<Col>
						<Card className="h-100" key={object.id}>
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
								<Button onClick={{}} variant="outline-dark">
									Details
								</Button>
							</Card.Footer>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
};

export default Gallery;