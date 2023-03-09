const express = require('express');
const path = require('path');
const http = require('http');
const dotenv = require('dotenv');

const { createTransport } = require('nodemailer');
const PORT = process.env.port || 5000;
const router = express.Router();
dotenv.config();



// server used to send send emails

const app = express();

app.use(express.json());

console.log(path.join(__dirname, '../Client/build/index.html'));

app.use(express.static(path.join(__dirname, '../Client/build')));

app.get('*', function (_, res) {
	res.sendFile(path.join(__dirname, '../Client/build/index.html'), function (err) {
		
		res.status(500).send(err);
	});
});

const contactEmail = createTransport({
	host: process.env.EMAIL_SERVICE,
	port: 587,
	auth: {
		user: process.env.EMAIL_USERNAME,
		pass: process.env.EMAIL_PASSWORD,
	},
	// !DO not do this in production
	tls: {
		rejectUnauthorized: false,
	},
});

contactEmail.verify((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Ready to Send');
	}
});

app.use('/', router);

router.get('/', (req, res, next) => {
	res.send('hello server');
});

router.post('/contact', (req, res) => {
	console.log(req);
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	const mail = {
		from: process.env.EMAIL_TO,
		to: process.env.EMAIL_TO,
		subject: 'Contact Form Submission - Portfolio',
		html: `<p>Name: ${name}</p>
	       <p>Email: ${email}</p>
	       <p>Message: ${message}</p>`,
	};

	console.log(mail);
	contactEmail.sendMail(mail, (error) => {
		if (error) {
			res.json(error);
		} else {
			console.log('send message');
			res.json({ code: 200, status: 'Message Sent' });
		}
	});
});

const httpServer = http.createServer(app);

const server = httpServer.listen(PORT, () =>
	console.log(`server running on http://localhost:${PORT}`),
);
process.on('unhandledRejection', (err, promise) => {
	console.log(`Logged Error: ${err}`);
	server.close(() => process.exit(1));
});
