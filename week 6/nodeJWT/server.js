const express =require('express');
const app= express();



app.use(express.json());
app.use(express.urlencoded({extended:true}))






app.listen(3344, ()=> {
    console.log('created the port');
})