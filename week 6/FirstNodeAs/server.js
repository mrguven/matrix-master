const express = require('express');
const rout= require('./config/route')
const dotenv= require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.set('view engine','ejs')

app.use(rout);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static('public'))
app.listen(port, (req,res)=> {
  
    console.log('connected the port');
})