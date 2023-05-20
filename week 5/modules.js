// global object

let {people,ages}=require('./people') //this and 

 let men= require('./people')// this way is all correct to call modules 

 console.log(men.people, men.ages);

 const os =require('os');

 console.log(os.platform(),os.homedir());