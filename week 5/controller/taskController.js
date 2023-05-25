const fs=require('fs');
const homePage=  (req,res)=> {


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
   
}



module.exports= {
    homePage
}