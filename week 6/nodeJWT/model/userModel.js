const mongoose = require('mongoose');

const signUp = new mongoose.Schema({

    userID:{
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


const userSchema= mongoose.model('signUp',signUp)








const logIn =mongoose.Schema({
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




const userLogIn = mongoose.model('logIn',logIn);






module.exports={userSchema,userLogIn}