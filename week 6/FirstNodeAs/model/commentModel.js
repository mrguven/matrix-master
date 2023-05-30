const mongoose = require('mongoose');

const commentSchema =mongoose.Schema({
    userName:{
        type:String,
    
    },
    name:{
    type:String,
    required:true
    }



}, {timestamps:true})

const Comment = mongoose.model('Comment',commentSchema)
module.exports = Comment