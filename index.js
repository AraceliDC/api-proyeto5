require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose')
const routes = require('./src/routes/index')
const app = express();

const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGODB_URI)

app.use(express.json())

app.use('/v1', routes)

app.get('/', (req, res) => {
    res.send("home")
})

app.listen(port, ()=> {
    console.log('servirdor iniciado en ' + port)
})