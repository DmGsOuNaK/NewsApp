const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const home = require('./src/components/Home')

const port = process.env.port || 8080;
const app = express();

app.set('view engine', 'ejs')

app.use (bodyParser.urlencoded({extended: false}))
//parse application/json
app.use(bodyParser.json())


app.use('/', home)
app.listen(port)