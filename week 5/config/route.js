const express=require('express')
const router=express.Router();
const taskController = require('../controller/taskController')
const fs=require('fs');

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
    
        
    
    
router.get('/',taskController.homePage);

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


    router.get('/register', (req,res)=> {

        res.render('register')
    })


module.exports=router;