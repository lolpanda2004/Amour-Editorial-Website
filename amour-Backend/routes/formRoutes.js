// routes/formRoutes.js
import express from 'express'
import multer from 'multer'

const router = express.Router();
const path = require('path');
const { handleContactForm, handleBookingForm } = require('../Controllers/formController');

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save to /uploads directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// Optional: File type filter (PDF, DOCX only)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.pdf', '.doc', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Unsupported file type. Allowed: PDF, DOC, DOCX'));
  }
};

const upload = multer({ storage, fileFilter });

//  Contact form - No file
router.post('/contact', handleContactForm);

//  Booking form - With file upload
router.post('/booking', upload.single('document'), handleBookingForm);

module.exports = router;
