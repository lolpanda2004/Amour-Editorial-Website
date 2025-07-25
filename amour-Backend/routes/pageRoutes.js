const express = require('express');
const router = express.Router();
const { getPages, updatePage } = require('../Controllers/pageController');

router.get('/', getPages);
router.put('/:id', updatePage);

module.exports = router;
