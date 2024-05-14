const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
require('dotenv').config();

const foodroute=require('./food');
const mailroute = require('./mail');

const app = express();


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',mailroute);
app.use('/food/',foodroute);


// Nodemailer configuration
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//         user: 'tutretifyo@gufum.com',
//         pass: 'Meet@6440'
//     }
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(process.env.mailid);
});
