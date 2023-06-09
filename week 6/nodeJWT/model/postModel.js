const mongoose = require('mongoose');



const userPostSchema =mongoose.Schema({
    title:{
        type:String,
        required:true,
        
    },
    post:{
    type:String,
    required:true,
    
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'signUp'
    },
    userName: {
        type: String,
       
    }

    

  

    }, {timestamps:true})


    const postSchema = mongoose.model('userPostSchema',userPostSchema);


    module.exports=postSchema