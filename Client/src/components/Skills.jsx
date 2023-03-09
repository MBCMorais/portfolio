import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import background from "../assets/img/blue_background.jpg"


const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className='skill' id='skills'>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<div className='skill-bx wow zoomIn'>
							<h2>Skills & Tools</h2>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br>{' '}
								Lorem Ipsum has been the industry's standard dummy text.
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								autoPlay={true}
								autoPlaySpeed={2500}
								// customTransition='all .5'
								customTransition='transform 300ms ease-in-out'
								transitionDuration={500}
								className='owl-carousel owl-theme skill-slider'
							>
								<div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
										alt='azure'
									/>
									<h5>Azure</h5>
								</div>
								<div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
										alt='javascript'
									/>
									<h5>Javascript</h5>
								</div>
								<div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
										alt='css'
									/>
									<h5>CSS</h5>
								</div>
								<div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
										alt='bootstrap'
									/>
									<h5>Bootstrap</h5>
								</div>
								<div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
										alt='expressJS'
									/>
									<h5>ExpressJS</h5>
								</div>
								<div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
										alt='git'
									/>
									<h5>GIT</h5>
								</div>
                                <div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg'
										alt='handlebars'
									/>
									<h5>Handlebars</h5>
								</div>
                                <div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg'
										alt='nodejs'
									/>
									<h5>NodeJS</h5>
								</div>
                                <div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
										alt='mongodb'
									/>
									<h5>MongoDB</h5>
								</div>
                                <div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg'
										alt='SQL'
									/>
									<h5>SQL</h5>
								</div>
                                <div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
										alt='vscode'
									/>
									<h5>Vscode</h5>
								</div>
                                <div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
										alt='reactjs'
									/>
									<h5>ReactJS</h5>
								</div>
                                <div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
										alt='html'
									/>
									<h5>Html</h5>
								</div>
                                <div className='item'>
									<img
										src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
										alt='c#'
									/>
									<h5>C#</h5>
								</div>
                                
							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className='background-image-left' src={background} alt='tImage' />
		</section>
	);
};

export default Skills;
