const express = require('express');
const auth = require('../middlewares/auth');
const { getAllUsers, signUp, login, updateUser, deleteUser } = require('../constrollers/User.controller');
const router = express.Router();


router.get('/', getAllUsers);
router.post('/signup', signUp);
router.post('/login', login);
router.put('/', auth, updateUser);
router.delete('/', auth , deleteUser)

module.exports = router