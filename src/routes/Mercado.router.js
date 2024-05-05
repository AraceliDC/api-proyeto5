const express = require('express')
const { buyItem } = require('../constrollers/Mercado.controller')
const router = express.Router()


router.post('/mercadopago', buyItem)