
const mongoose =require('mongoose')

const goalSchema= mongoose.Schema({

    firstname: {
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    // email:{
    //     type:String,
    //     required:true
    // },
    // phone:{
    //     type:String,
    //     required:true
    // },
    // address:{
    //     type:String,
    //     required:true
    // },
    // address2:{
    //     type:String,
    //     required:true
    // },
    // state:{
    //     type:String,
    //     required:true
    // },
    // country:{
    //     type:String,
    //     required:true
    // },
    // post:{
    //     type:String,
    //     required:true
    // },
    // area:{
    //     type:String,
    //     required:true
    // }
}, {timestamps:true});



 

const Blog=mongoose.model('Blog', goalSchema);

module.exports = Blog

