import { useEffect, useState } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/person_programmer.jpg';

const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const period = 2000;
	const toRotate = ['junior Developer', 'Web Developer'];

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="aligh-items-center">
					<Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
						<h1>
							{`Hi! I'm Marcelo `}
                           
							<span className="txt-rotate">{text}</span>
						</h1>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui doloremque nam tempora
							maiores laudantium ratione similique animi deleniti nisi numquam, rerum, possimus
							officia ducimus laboriosam sequi illum? Culpa, officia numquam.
						</p>
						<button className='' onClick={() => console.log('connect')}>
							Let's Connect
							<ArrowRightCircle size={25} />
						</button>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<img src={headerImg} alt='header img' />
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Banner;
