const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var userModel = require('./user_mongoose'); // Assuming this path is correct

const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    // Create a new user instance with the received data
    const user = new userModel({ name, email, message });

    try {
        // Save the user to the database
        await user.save();
        console.log('Saved to database');

        // Create a Nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'deepakmishra.gventure@gmail.com', // Your Gmail email address
                pass: 'tdvzjotbxfbnxkub' // Your Gmail password or app-specific password
            }
        });

        // Email options
        const mailOptions = {
            from: email,
            to: 'erkajalshukla@gmail.com',
            subject: `Client ${name} Contact You For New Project`,
            text: `Hello erkajalshukla ,\n\n${message} \n \n Thanks and Regards \n\n ${name}`
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
                return res.status(500).send({ success: false, message: 'Error sending email' });
            } else {
                console.log('Email sent:', info.response);
                return res.status(200).send({ success: true, message: 'Email sent successfully' });
            }
        });
    } catch (error) {
        console.error('Error saving to database:', error);
        return res.status(500).send({ success: false, message: 'Error saving to database' });

    }
});

// app.post('/send-email', (req, res) => {
//   const { name, email, message } = req.body;

//   // Create a Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'deepakmishra.gventure@gmail.com', // Your Gmail email address
//       pass: 'tdvzjotbxfbnxkub' // Your Gmail password or app-specific password
//     }
//   });

//   // Email options
//   const mailOptions = {
//     from: email,
//     to: 'erkajalshukla@gmail.com',
//     subject: 'Subject of your email',
//     text: `Hello ${name},\n\n${message}`
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).send('Error sending email');
//     } else {
//       console.log('Email sent:', info.response);
//       res.status(200).send('Email sent successfully');
//     }
//   });
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
