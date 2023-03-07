const cors = require('cors');
const { createTransport } = require('nodemailer');
const express = require('express');
const router = express.Router();
const path = require('path');

// server used to send send emails

const corsOptions = {
	origin: '*',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
require('dotenv').config();

app.use(express.static(path.resolve(__dirname, './build')));

app.use('/', router);
app.listen(5000, () => console.log('Server Running'));

const contactEmail = createTransport({
	service: process.env.EMAIL_SERVICE,
	auth: {
		user: process.env.EMAIL_USERNAME,
		pass: process.env.EMAIL_PASSWORD,
	},
});

contactEmail.verify((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Ready to Send');
	}
});

router.post('/contact', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const mail = {
		from: name,
		to: process.env.EMAIL_TO,
		subject: 'Contact Form Submission - Portfolio',
		html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
	};
	contactEmail.sendMail(mail, (error) => {
		if (error) {
			res.json(error);
		} else {
			res.json({ code: 200, status: 'Message Sent' });
		}
	});
});
