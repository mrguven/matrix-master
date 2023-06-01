const mongoose = require('mongoose');

const commentSchema =mongoose.Schema({
    title:{
        type:String,
        required:true
    
    },
    post:{
    type:String,
    required:true
    },

    



}, {timestamps:true})





const subCommentModel =mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    post:{
    type:String,
    required:true
    }



}, {timestamps:true})

const subComment = mongoose.model('subComment',subCommentModel);





const Comment = mongoose.model('Comment',commentSchema);


module.exports = {Comment,subComment}