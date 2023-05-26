const fs=require('fs');

const asyncHandler= require('express-async-handler')

const Goal= require('../model/goalModel')



const homePage= asyncHandler( async  (req,res)=> {  // we use async, because we connect database. they  must run async


    let mascots = [
                { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
                { name: 'Tux', organization: "Linux", birth_year: 1996},
                { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
              ];
          

              fs.readFile('data.json',(err,data)=> {
                if(err) {
                    res.resnder('./404.html')
                }
                else{
                let dataPool = JSON.parse(data);
                res.render('index2.ejs', {title: 'home page', mascots,dataPool})
                }


              })
   
})



const getGoals= asyncHandler( async(req,res)=> {

const goals =await Goal.find();
res.status(200).json(goals)

})


module.exports= {
    homePage,getdata
}