const User = require('../models/User.model')

const verifyUser = async(req, res) =>{
    try {
        const user = await User.findById(req.user.id).select('password')
        return res.json({ user })
    } catch (error) {
        return res.status(500).json({
            message: 'Error'
        })
    }
}

module.exports = verifyUser