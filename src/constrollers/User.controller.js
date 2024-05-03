const User = require('../models/User.model');
const bcrypt = require('bcrypt')

const signUp = async(req,res) => {
    try {
        const { email } = req.body;

        const userExists = await User.findOne({ email })

        if(!userExists){
            const newUser = new User(req.body);
            newUser.hashPassword(req.body.password)
            const response = await newUser.save()
            
            return res.json({
                message: 'Usuario creado exitosamente',
                detail: response
            })
        }else{
            return res.json({
                message: 'el usuario ya existe'
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const login = async (req,res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email })

        const correctPassword = user === null ? false : await bcrypt.compare(password, user.password)

        if (!(user && correctPassword)){
            return res.json({
                message: 'usuario o clave invalida'
            })
        }else{
            return res.json({
                message: 'Ok',
                detail: {
                    user,
                    token: user.generateJWT()
                }
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const response = await User.find()
        console.log(response)
        if (response){
            return res.json({
                message: 'Usuarios',
                detail: response
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const newData = req.body

        const response = await User.findByIdAndUpdate(
            newData.id,
            { $set: newData },
            { new: true }
        )

        if(response){
            return res.json({
                message: 'Usuario actualizado correctamente',
                detail: response
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const response = await User.findByIdAndDelete(req.body.userId)
        if (response){
            return res.json({
                message: 'Usuario eliminado exitosamente'
            })
        }
    } catch (error) {
        return res.json({
            message: 'Error',
            detail: error.message
        })
    }
}

module.exports = {
    signUp,
    login,
    getAllUsers,
    updateUser,
    deleteUser
}