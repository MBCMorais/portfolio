import { useEffect, useState } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/github_icon.svg';
import navIcon2 from '../assets/img/linkedin-icon.svg';
import navIcon3 from '../assets/img/instagram-icon.svg';
import resumePdf from '../assets/poster.pdf';
import logo from '../assets/img/logo.png';

const NavBar = () => {
	const [activeLink, SetActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			window.screenY > 50 ? setScrolled(true) : setScrolled(false);
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		SetActiveLink(value);
	};

	return (
		<Navbar bg='primary' expand='lg' className={'scrolled' ? 'scrolled' : ''}>
			<Container className="pt-1">
				<Navbar.Brand href='#home' className='d-flex align-items-center'>
					<img className='logoImg' src={logo} alt='logo'></img>

					<h3 className='text-white'>Marcelo Morais</h3>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav'>
					<span className='navbar-toggler-icon'></span>
				</Navbar.Toggle>
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link
							href='#home'
							className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onUpdateActiveLink('home')}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href='#skills'
							className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onUpdateActiveLink('skills')}
						>
							Skills
						</Nav.Link>
						<Nav.Link
							href='#projects'
							className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
							onClick={() => onUpdateActiveLink('projects')}
						>
							Projects
						</Nav.Link>
					</Nav>
					<span className='navbar-text'>
						<div className='social-icon'>
							<a href='https://github.com/MBCMorais' target='_blank' rel='noreferrer'>
								<img src={navIcon1} alt='github' />
							</a>
							<a
								href='https://www.linkedin.com/in/marcelocmorais/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={navIcon2} alt='Linkedin' />
							</a>
							<a href='https://www.instagram.com/marcelobcmorais/' target='_blank' rel='noreferrer'>
								<img src={navIcon3} alt='instagram' />
							</a>
						</div>
						<div>
							<a
								className='resume-button'
								href={resumePdf}
								target='_blank'
								rel='noopener noreferrer'
							>
								Resume
							</a>
						</div>
						{/* <button className='' onClick={() => console.log('connect')}>
							<span>Let's Connect</span>
						</button> */}
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
