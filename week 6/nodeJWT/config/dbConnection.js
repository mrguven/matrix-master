

const mongoose =require('mongoose')

const dbconnection= async()=>{  
    try {
        const con= await mongoose.connect(process.env.MONGO_URI)
    }
  
catch(error) {
    console.log(error)
}

} 


mongoose.connection.once('open', ()=> {
    console.log('connection with database is successful');
}).on('err', (err)=> {
console.log('connection error'.error);
})

module.exports=dbconnection;