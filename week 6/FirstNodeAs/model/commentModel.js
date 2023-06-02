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
        get: (updatedAt)=> {
            const date = new moment(updatedAt);
            return date.format('D/MM/YYYY  h:mm:ss a') // it needs to make beter. when we update the post, the time should be updated.
        }

    },


// otherUserComment: {     // I try to send other user`s post to this user collection and I make a relation between them
//     title:{
//         type:String,
//         required:true,
//         minlength:25
//     },
//     post:{
//     type:String,
//     required:true,
//     minlength:100
//     }

// }



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