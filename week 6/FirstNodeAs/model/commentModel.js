const mongoose = require('mongoose');

const commentSchema =mongoose.Schema({

name:String


})

const comment = mongoose.model('Comment',commentSchema)