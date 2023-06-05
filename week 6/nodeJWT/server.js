const express =require('express');
const app= express();
const env= require('dotenv').config();

// const rout= require('./config/router')

// const dbConnection=require('./config/dbConnection')

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs');

//  app.use(rout)
// dbConnection()

const port= process.env.PORT




app.listen(port, (req,res)=> {
    console.log('created the port');
})