import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SearchForm.css'

const SearchForm = ({ handleSubmit, handleChange, searchString, searchLength }) => {
	return <Form onSubmit={handleSubmit}>
			<Row>
				<Col className="formGroup">
					<div className="inputs">
						<Form.Group>
							<div className="input1">
								<Form.Control className="input1" size="sm" placeholder="enter your search terms here" type="text" name="searchString" required onChange={handleChange} value={searchString} />
							</div>
					
							<div className="input2">
								<Form.Control size="sm" placeholder="results max" type="number" name="searchLength" required onChange={handleChange} value={searchLength} />
							</div>
						</Form.Group>
					</div>
					<div id="search-terms">
						<Form.Text  className="text-muted">
							Search by any query, such as artist name, e.g., "Vermeer"
						</Form.Text>
					</div>
				</Col>
				<Col md="auto">
					<Button type="submit" variant="dark" className="btn-sm">
						Submit
					</Button>
				</Col>
			</Row>
		</Form>;
};

export default SearchForm;
