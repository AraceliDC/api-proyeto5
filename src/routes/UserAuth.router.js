const express = require('express');
const auth = require('../middlewares/auth');
const verifyUser = require('../constrollers/UserAuth.controller');
const router = express.Router();

router.get('/verificar-usuario',auth, verifyUser)