const express = require('express');
const router = express.Router();

router.use('/forms', require('./formRoutes'));
router.use('/pages', require('./pageRoutes'));
router.use('/testimonials', require('./testimonialRoutes'));
router.use('/auth', require('./authRoutes'));

module.exports = router;
