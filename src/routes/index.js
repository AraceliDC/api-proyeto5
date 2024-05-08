const express = require('express');
const router = express.Router();
const userRoutes = require('./User.router')
const postRoutes = require('./Post.router')
const categoryRoutes = require('./Category.router')
const mercadoPago = require('./Mercado.router')

router.use('/users', userRoutes)
router.use('/posts', postRoutes);
router.use('/categories', categoryRoutes);
router.user('/mercadopago', mercadoPago)

module.exports = router;