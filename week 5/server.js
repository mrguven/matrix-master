const express= require('express');

const app= express(); 



//register view engine
app.set('view engine','ejs');   // ask about this topic. what is template, what for used it. why?
 
//app.set('views', 'myviews');



app.listen(8050, (err)=> {
        if (err) {
            console.log(err);

        } else {
            console.log('connected succesfully');
        }
})


app.get('/', (req,res,)=> {

    const mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
      ];
    
    

   res.render('index1', {title:'Home', mascots}); // this is ejs method. we can render and send the page to client side easly.
   //and second parameter is an object and we can make changing inside the webpage via ejs.
   console.log('this is home page');
    
})

app.get('/one', (req,res)=> {
        res.status(200).render('one' , {title:'page one'})
});


app.get('/two',(req,res)=> {

res.status(200).render('two');



// res.type('text/html');    //we do not need to write res.type in express
// res.write('this is second Hello')
// },(req,res)=> {
//     res.status(200).end('this is second world')   /// in this code, we did not get result of end(), chrome is always working.
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



