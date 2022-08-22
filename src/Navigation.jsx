import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
	return <Navbar className="BarNav" collapseOnSelect variant="light" expand="md">
			<div>
				<Navbar.Brand className="brand" href="https://i.imgur.com/13U8rKd.png" as={Link} to="/home">
					Rijksgalerij-GING
				</Navbar.Brand>
			</div>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<Nav.Link as={Link} to="/home">
						Home
					</Nav.Link>
					<Nav.Link as={Link} to="/gallery">
						Gallery
					</Nav.Link>
					<Nav.Link as={Link} to="/search">
						Search
					</Nav.Link>
					<Nav.Link as={Link} to="/about">
						About
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			<img className="Wormy" alt="" src="https://i.imgur.com/QySQprg.png" />
				
		</Navbar>;
};

export default Navigation;
