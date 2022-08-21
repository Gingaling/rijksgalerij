import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

const About = () => {
	return (
		<Container className="p-5 bg-light border rounded-3">
			<h1>About Rijksgalerij</h1>
			<Image
				fluid
				src="https://lh3.googleusercontent.com/O7ES8hCeygPDvHSob5Yl4bPIRGA58EoCM-ouQYN6CYBw5jlELVqk2tLkHF5C45JJj-5QBqF6cA6zUfS66PUhQamHAw=s0"
				alt="An excerpt from a painting called &quot;The Nightwatch,&quot; by Rembrandt"
				style={{ paddingBottom: '1em' }}
			/>
			<p className="lead">
				Rijksgalerij is an application for users to interact with the
				Rijksmuseum API. The Rijksmuseum is a collection of Dutch and
				international art and history from the Middle Ages to the present day,
				located in Amsterdam. Also known as the Museum of Rembrandt, Rijksmuseum
				showcases the finest art from the Netherlands and all over the world.
			</p>
			<p className="lead">
				The Rijksmuseum{' '}
				<a
					href="https://data.rijksmuseum.nl/"
					target="_blank"
					rel="noreferrer noopener">
					API
				</a>{' '}
				makes the museum website's collection accessible to developers all over
				the world, and inspired the creation of this application, Rijksgalerij.
				This allows users to search for and view art by Rembrandt, Vermeer, Both
				and other Dutch and international artists.
			</p>
			<Button
				variant="dark"
				href="https://www.rijksmuseum.nl/en?gclid=Cj0KCQjwjer4BRCZARIsABK4QeUUFzwBJPadQZccDkK-omN8hdV_yvVpntofcNaAcvMkW2JIDPHMh7IaAuuhEALw_wcB"
				target="_blank"
				rel="noreferrer noopener"
				style={{ marginTop: '1em' }}>
				Visit the Rijksmuseum website
			</Button>
		</Container>
	);
};
export default About;
