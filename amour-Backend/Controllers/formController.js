// controllers/formController.js
const path = require('path');
const fs = require('fs');
const { sendEmail } = require('../utils/emailService');

// Contact Form Handler
const handleContactForm = async (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong><br>${message}</p>
    `;

    await sendEmail({
      subject: `Contact Form: ${subject || 'New Message'}`,
      html: emailContent,
    });

    res.status(200).json({ success: true, message: 'Message sent successfully.' });

  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({ error: 'Failed to send message.' });
  }
};

// Booking Form Handler (with file upload)
const handleBookingForm = async (req, res) => {
  try {
    const { name, email, service, message } = req.body;
    const file = req.file;

    if (!name || !email || !service) {
      return res.status(400).json({ error: 'Required fields missing.' });
    }

    const emailContent = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong><br>${message || 'N/A'}</p>
    `;

    const attachments = file ? [{
      filename: file.originalname,
      path: file.path,
    }] : [];

    await sendEmail({
      subject: `Booking Request – ${service}`,
      html: emailContent,
      attachments,
    });

    res.status(200).json({ success: true, message: 'Booking submitted successfully.' });

  } catch (err) {
    console.error('Booking form error:', err);
    res.status(500).json({ error: 'Failed to submit booking.' });
  }
};

module.exports = {
  handleContactForm,
  handleBookingForm,
};
