const app = require('express')
const User = require('../models/User.model')
const auth = require('../middlewares/auth')

app.get('verificar-usuario', auth, async(req, res) =>{
    try {
        const user = await User.findById(req.user.id).select('password')
        return res.json({ user })
    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        })
    }
})

