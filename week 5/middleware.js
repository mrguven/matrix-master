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

app.use(express.static('public')) // with this method we can make  img and css vs. files  public and reachable.
// ejs file search automaticly css file in publuck folder
app.use((req,res,next)=> {

    console.log('this is next middleware');
    
    
    next();

})


app.get('/', (req,res)=> {

    let mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
      ];
  
    res.render('index2.ejs', {title: 'home page', mascots})
})