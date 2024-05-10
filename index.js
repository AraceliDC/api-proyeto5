require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose')
const routes = require('./src/routes/index');
const dbconnect = require('./db');
const cors = require('cors')
const app = express();

const port = process.env.PORT || 3000

//mongoose.connect(process.env.MONGODB_URI)
dbconnect()

app.use(cors())

app.use(express.json())

app.use('/v1', routes)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    next();
  });
  

app.get('/', (req, res) => {
    res.send("home")
})

app.listen(port, ()=> {
    console.log('servirdor iniciado en ' + port)
})