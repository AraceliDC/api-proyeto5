const express = require('express')
const mongoose = require('mongoose')

const dbconnect = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('server conectado')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

module.exports = dbconnect