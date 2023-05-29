const express = require('express');

const dotenv= require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.listen(port, (req,res)=> {
    console.log('connected the port');
})