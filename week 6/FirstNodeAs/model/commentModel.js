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

    updated_at: {

         type: Date, required: true, default: Date.now ,
        get: (createdAt)=> {
            const date = new moment(createdAt);
            return date.format('D/MM/YYYY  h:mm:ss a')
        }

    }



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