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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'signUp'
    }

    

  

    }, {timestamps:true})


    const postSchema = mongoose.model('userPostSchema',userPostSchema);


    module.exports=postSchema