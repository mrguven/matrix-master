const mongoose = require('mongoose');

const signUp = new mongoose.Schema({

    userId:{
        type:String
    },

    firstName:{type:String,
    require:[true,'not be empty']},
    lastName:{type:String,
        require:[true,'not be empty']},

    userName:{type:String,
        require:[true,'not be empty']},

    email:{type:String,
        require:[true,'not be empty']},
    phone:{type:String,
        require:[true,'not be empty']},
    password:{type:String,
        require:[true,'not be empty']}
},{timestamps:true})


const userInfo= mongoose.model('signUp',signUp);




















module.exports=userInfo;