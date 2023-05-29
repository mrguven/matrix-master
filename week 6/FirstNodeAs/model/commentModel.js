const mongoose = require('mongoose');

const commentSchema =mongoose.Schema({

name:String


}, {timestamps:true})

const Comment = mongoose.model('Comment',commentSchema)
module.exports = Comment