const express = require('express');

const app= express();

app.listen(8008, (req,res)=> {
    console.log('the port is working')
})

app.set('view engine', 'ejs')

app.use((req,res,next)=> {

    console.log('new request made');
    console.log('host: ', req.hostname);
    console.log('path ', req.path);
    console.log('method ', req.method);
    next();

})

app.use((req,res,next)=> {

    console.log('this is next middleware');
    
    
    next();

})


app.get('/', (req,res)=> {

  
    res.render('index2.ejs')
})