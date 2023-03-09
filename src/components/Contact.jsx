import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/contact_img.jpg';
import axios from 'axios';

const Contact = () => {
	const formInitialDetails = {
		name: '',
		email: '',
		message: '',
	};

	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState('Send');
	const [status, setStatus] = useState({});
	const [visible, setVisible] = useState(false);

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};
	// https://marcelomorais.netlify.app/contact
	const handleSubmit = async (e) => {
		e.preventDefault();
		setButtonText('Sending...');
		console.log(typeof formDetails);
		console.log(formDetails);

		let response = await axios.post(
			'/contact',
			{ name: 'teste', email: 'marcelo.calvao@gmail.com' },
			{
				headers: {
					'Content-Type': 'application/json;',
				},
			},
		);

		// .then((res) => {
		// 	console.log(res);
		// 	console.log(JSON.stringify(res.data));
		// })
		// .catch((err) => {
		// 	console.log(err);
		// });
		// if (response === undefined) {
		// 	setButtonText('send');
		// 	setStatus({ success: false, message: 'Something went wrong, please try again later.' });
		// 	return;
		// }

		// let response = await fetch(`http://localhost:5000/contact`, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json;',
		// 		'Accept': 'application/json'
		// 	},
		// 	body: JSON.stringify(formDetails),
		// });

		console.log('response:', response);
		setButtonText('Send');

		setFormDetails(formInitialDetails);

		if (response.status === 200) {
			setVisible(true);
			setStatus({ success: true, message: 'Message sent successfully' });
		} else {
			setVisible(true);
			setStatus({ success: false, message: 'Something went wrong, please try again later.' });
		}
		setTimeout(() => {
			setVisible(false);
		}, 3000);
	};

	return (
		<section className='contact' id='connect'>
			<Container>
				<Row className='align-items-center'>
					<Col size={12} md={6}>
						<img src={logo} alt='Logo' />
					</Col>
					<Col size={12} md={6}>
						<div className=''>
							<h2>Get In Touch</h2>
							<form onSubmit={handleSubmit}>
								<Row>
									<Col size={12} sm={6} className='px-1'>
										<input
											type='text'
											value={formDetails.name}
											placeholder='Name'
											onChange={(e) => onFormUpdate('name', e.target.value)}
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
											value={formDetails.message}
											placeholder='Message'
											onChange={(e) => onFormUpdate('message', e.target.value)}
										></textarea>

										{status.message && visible && (
											<Row>
												<p id='message' className={status.success === false ? 'danger' : 'success'}>
													{status.message}
												</p>
											</Row>
										)}
										<button type='submit'>
											<span>{buttonText}</span>
										</button>
									</Col>
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
