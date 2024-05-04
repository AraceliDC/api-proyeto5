const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, updatePost, deletePost } = require('../constrollers/Post.controller');
const auth = require('../middlewares/auth')

router.post('/', createPost);
router.put('/actualizar', auth, updatePost)
router.delete('/', auth, deletePost)
router.get('/', getAllPosts);
router.get('/obtener-polera/:_id')

module.exports = router