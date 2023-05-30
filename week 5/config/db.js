
const mongoose= require('mongoose');

const connectDB= async()=> {
    try {
    const conn=await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongodb connected ${conn.connection.host}`);

    }

    catch (error){ 
        console.log(error);
        process.exit(1)


    }

}

mongoose.connection.once('open', ()=> {
    console.log('connection succussfully');
}).on('err',(error)=> {
    console.log('conncection errror:'.error);
})

module.exports=connectDB














// // const MongoClient = require('mongodb').MongoClient;
// // const { Schema } = require("mongoose")







// // MongoClient.connect(url, function(err, db) { 
// //     if (err) throw err;
// //     db.collection('')
// //     console.log("Database created!");
// //     db.close();
// //   });
  
  
  
// //   const PersonSchema = new Schema({
// //       name: {
// //         type: String,
// //         required: true,
// //         default: "Unknown"
// //       },
// //       age: {
// //         type: Number,
// //         min: 18,
// //         max: 80,
// //         required: true
// //       },
// //       isSingle: {
// //         type: Boolean
// //       },
// //       birthday: {
// //         type: Date,
// //         required: true
// //       },
// //       description: { type: Buffer }
// //     })
  
  
  
  
  
  
  
  
  
  
  
  
  
  