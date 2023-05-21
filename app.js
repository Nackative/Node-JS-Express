const express = require('express')
const chalk = require('chalk')
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3500;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));
app.get("/", (req, res) =>{

    res.send('Hi NS Family Company 2022');

}) 

app.listen(port, ()=>{
    debug("Listerning on port : " + chalk.yellow(port));
})