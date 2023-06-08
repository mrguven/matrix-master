const express =require('express');
const app= express();
const env= require('dotenv').config();
const jwt = require('jsonwebtoken');
const rout= require('./config/router')
const cookieParser=require('cookie-parser')
const dbConnection=require('./config/dbConnection')
const port= process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());


app.use(express.static('public'))
app.set('view engine','ejs');

 app.use(rout)
dbConnection()






app.listen(port, (req,res)=> {
    console.log('created the port');
})