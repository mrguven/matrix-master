const express=require('express')
const router=express.Router();
//const taskController = require('../controller/taskController')  // we can use other method
const fs=require('fs');
const {homePage,getGoals}= require('../controller/taskController');

// router.use((req, res, next) => {
//     console.log('Time: ', Date.now())
//     console.log('this is time');
//     next()
//   });



//   router.get('/', (req,res)=> {

//     console.log('this is users');
//         res.send('this is test')
//         res.end();
//         }
//     );
    
        
    
        router.get('/', homePage);  
//router.get('/',taskController.homePage); // because of above  method we do not need to use this method.

router.get('/users', (req,res)=> {   // with this way, we get the data from json file.
console.log('read it?');
    fs.readFile('data.json',(err,data)=> {
        if(err) {
            res.render('./404.html')
        }
        else{
        let dataPool = JSON.parse(data);
        
        res.send(dataPool[0])
        res.end();
        }
    });
    
    
    })


   // router.get('/getdata', getGoals)


    router.get('/register', (req,res)=> {

        res.render('register')
    })


module.exports=router;