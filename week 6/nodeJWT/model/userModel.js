const mongoose = require('mongoose');

const userInfo = new mongoose.Schema({

    firstName:{type:String,
    require:[true,'not be empty']},
    lastName:{type:String,
        require:[true,'not be empty']},

    userName:{type:String,
        require:[true,'not be empty']},

    email:{type:String,
        require:[true,'not be empty']},
    phone:{type:String,
        require:[true,'not be empty']}
})


const userSchema= mongoose.model('userInfo',userInfo)


module.exports=userSchema