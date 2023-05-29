
const mongoose =require('mongoose')

const goalSchema= mongoose.Schema({

    firstname: {
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true,
        minLength: 1
    },
    // email:{
    //     type:String,
    //     required:true
    //     lowercase:true
    // },
    // phone:{
    //     type:String,
    //     required:true ,
    //    ///  min and max is restrict to value of data
    //  min:5
    //      validate: {
    //             validator: v => %2===0,      // with validate, we can make condition for date
    //             message: props => `${props.value} is not an even number`
    // }
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

