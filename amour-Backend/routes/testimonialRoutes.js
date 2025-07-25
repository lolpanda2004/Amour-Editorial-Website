const express = require('express');
const router = express.Router();
const { getTestimonials, addTestimonial } = require('../Controllers/testimonialController');

router.get('/', getTestimonials);
router.post('/', addTestimonial);

module.exports = router;
