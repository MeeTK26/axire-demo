
const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "73d4b9f723826f",
      pass: "d65eb2979a19c6"
    }
  });

// Send email endpoint
router.post('/sendemail', (req, res) => {
    const { email, subject, message } = req.body;

    console.log(email);
    console.log(subject);
    console.log(message);
    // Email message options
    const mailOptions = {
        from: '73d4b9f723826f',
        to: email,
        subject: subject,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});
module.exports = router