const express = require('express');
const dotenv= require('dotenv').config();


const app= express();
const rout=require('./config/route.js')

const connectDB=require('./config/db.js')
const Blog = require('./model/goalModel')
const port = process.env.PORT || 5000;

app.use(express.json()); // this is : expect request data to be sent in json format.
app.use(express.urlencoded());  // this is to get info in the url, (I am not sure)

app.use(express.static('public')) // with this method we can make  img and css vs. files  public and reachable.
// ejs file search automaticly css file in publuck folder
app.set('view engine', 'ejs');
app.use(rout); 
app.listen(port, (req,res)=> {
    console.log('the port is working')
})


//DotEnv: it contains sensetive data, and it is object. we can reach 'precess.env.'keys''



connectDB();


run()

async function run(){

    try {
        const blog= new Blog({
            firstname:'raug',
            lastname:'tere'
        })
    
        await blog.save();
        console.log(blog);
    }
     catch (error) {
        (error)=> console.log(error.message);
    }
}
    




 // this is used to route the request route.js. we do all task in that file.


// app.use((req,res,next)=> {  // we can get information of request.

//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path ', req.path);
//     console.log('method ', req.method);
//     next();

// })


// app.use((req,res,next)=> {  // I did not understand why we use this

//     console.log('this is next middleware');
    
    
//     next();

// })


// app.get('/', (req,res)=> {

//     let mascots = [
//         { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
//         { name: 'Tux', organization: "Linux", birth_year: 1996},
//         { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
//       ];
  
//     res.render('index2.ejs', {title: 'home page', mascots})
// })




// app.get('/users', (req,res)=> {            /// we send this file to route.js
// fs.readFile('data.json',(err,data)=> {
//     if(err) {
//         res.render('404.html')
//     }
//     else{
//     let dataPool = JSON.parse(data);
//     console.log(dataPool);
//     res.send(dataPool[0])
//     }
// });

    

// })