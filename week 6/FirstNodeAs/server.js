const express = require('express');
const rout= require('./config/route')
const dotenv= require('dotenv').config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs')

app.use(rout);


app.listen(port, (req,res)=> {
  
    console.log('connected the port');
})