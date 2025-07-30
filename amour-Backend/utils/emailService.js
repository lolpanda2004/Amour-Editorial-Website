// utils/emailService.js
import nodemailer from 'nodemailer'


const path = require('path');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can also use 'Outlook', 'Zoho', or SMTP config
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async ({ subject, html, attachments = [] }) => {
  const mailOptions = {
    from: `"Amour Editorial" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER, // Where submissions go (admin email)
    subject,
    html,
    attachments,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
