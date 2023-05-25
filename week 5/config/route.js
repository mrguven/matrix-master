const express=require('express')
const router=express.Router();

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
    
        
    
    
router.get('/',(req,res)=> {


    let mascots = [
                { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
                { name: 'Tux', organization: "Linux", birth_year: 1996},
                { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
              ];
          

              fs.readFile('data.json',(err,data)=> {
                if(err) {
                    res.render('./404.html')
                }
                else{
                let dataPool = JSON.parse(data);
                res.render('index2.ejs', {title: 'home page', mascots,dataPool})
                }


            
   
})

})
router.get('/users', (req,res)=> {
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




module.exports=router;