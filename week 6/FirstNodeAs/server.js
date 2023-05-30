const express = require('express');
const app = express();
const rout= require('./config/route')
const dotenv= require('dotenv').config();
const dbConnection = require('./config/dbconnection')

const port = process.env.PORT;
app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs')
app.use(express.static('public'))
app.use(rout);

 dbConnection();

app.listen(port, (req,res)=> {
  
    console.log('connected the port');
})