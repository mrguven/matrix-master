const moment = require('moment/moment');
const mongoose = require('mongoose');

const commentSchema =mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:25
    },
    post:{
    type:String,
    required:true,
    minlength:100
    },

  

    }, {timestamps:true})




const Comment = mongoose.model('Comment',commentSchema);






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







module.exports = {Comment,subComment}