const express =require('express');
const app= express();
const env= require('dotenv').config();



app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs');

const port= process.env.PORT




app.listen(port, ()=> {
    console.log('created the port');
})