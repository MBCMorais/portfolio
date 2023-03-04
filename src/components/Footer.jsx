import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/github_icon.svg';
import navIcon2 from '../assets/img/linkedin-icon.svg';
import navIcon3 from '../assets/img/instagram-icon.svg';

const Footer = () => {

   const year = new Date().getFullYear();

	return (
		<footer className='footer'>
			<Container className="mx-0 m-0">
				<Row className='w-100 d-flex align-items-center justify-content-center'>
					
					<Col size={12} sm={4}>
						{/* <img src={logo} alt='Logo' /> */}
					</Col>
                    <Col size={12} sm={4}>
                    <p className="text-center">Copyright &copy;{year}. All Rights Reserved @MBCMorais</p>
					</Col>
					<Col size={12} sm={4} className='text-center text-sm-end'>
						<div className='social-icon'>
							<a href='#'>
								<img src={navIcon1} alt='Icon' />
							</a>
							<a href='#'>
								<img src={navIcon2} alt='Icon' />
							</a>
							<a href='#'>
								<img src={navIcon3} alt='Icon' />
							</a>
						</div>
						
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default Footer;
