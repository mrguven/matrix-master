const express= require('express');

const app= express(); 

app.listen(8050, (err)=> {
        if (err) {
            console.log(err);

        } else {
            console.log('connected succesfully');
        }
})


app.get('/', (req,res,)=> {
    
    
    res.type('text/html')
    res.write('Hello');
    res.end('this is first end')
    
})

app.get('/one', (req,res)=> {
        res.status(200).end('world')
});


app.get('/two',(req,res)=> {
res.type('text/html');    //we do not need to write res.type in express
res.write('this is second Hello')
},(req,res)=> {
    res.status(200).end('this is second world')   /// in this code, we did not get result of end(), chrome is always working.
})


app.get('/about', (req,res)=> {
    res.sendFile('./views/about.html', {root:__dirname})
});

app.get('/about-us', (req,res)=> {
    res.redirect('/about');
});

app.use((req,res)=> {
    res.status(404).sendFile('./views/404.html', {root:__dirname})
})

