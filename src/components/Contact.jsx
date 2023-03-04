import React from 'react';
import { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		message: '',
	};

	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState('Send');
	const [status, setStatus] = useState({});

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

    const handleSubmit =() =>{
        
    }

	return (
		<section className='contact' id='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} md={6}></Col>
					<Col size={12} md={6}>
						<div className=''>
							<h2>Get In Touch</h2>
							<form onSubmit=''>
								<Row>
									<Col size={12} sm={6} className='px-1'>
										<input
											type='text'
											value={formDetails.firstName}
											placeholder='Name'
											onChange={(e) => onFormUpdate('firstName', e.target.value)}
										/>
									</Col>

									<Col size={12} sm={6} className='px-1'>
										<input
											type='email'
											value={formDetails.email}
											placeholder='Email Address'
											onChange={(e) => onFormUpdate('email', e.target.value)}
										/>
									</Col>

									<Col size={12} className='px-1'>
										<textarea
											rows='6'
											value=''
											placeholder='Message'
											onChange={(e) => onFormUpdate('message', e.target.value)}
										></textarea>
										<button type='submit'>
											<span>{buttonText}</span>
										</button>
									</Col>
									{status.message && (
										<Col>
											<p className={status.success === false ? 'danger' : 'success'}>
												{status.message}
											</p>
										</Col>
									)}
								</Row>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Contact;
