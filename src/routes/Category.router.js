const express = require('express');
const router = express.Router();
const { createCategory, getCategories } = require('../constrollers/Category.controller')
const auth = require('../middlewares/auth')

router.post('/', auth, createCategory);
router.get('/', getCategories);

module.exports = router