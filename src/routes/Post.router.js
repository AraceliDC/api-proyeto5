const express = require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../constrollers/Post.controller');
const auth = require('../middlewares/auth')

router.post('/', auth, createPost);
router.get('/', auth, getAllPosts);

module.exports = router