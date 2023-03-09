import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectCard = ({ title, description, url, language, imgUrl }) => {
	return (
		<Col size={12} sm={6} md={4}>
			<div className='proj-imgbx'>
				<a href={url}>
					<img src={imgUrl} alt='img' />
					<div className='proj-txtx'>
					<h4>{title}</h4>
					<p>{description}</p>
					<span>{language}</span>
				</div>
				</a>				
			</div>
		</Col>
	);
};

export default ProjectCard;
