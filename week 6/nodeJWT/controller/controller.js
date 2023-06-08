const express = require('express');
const {userSchema,userLogIn,postSchema} = require('../model/userModel');

const getdata= postSchema.find().sort({ createdAt: -1 })




const getloginSignUpPage= (req,res)=> {
res.render('logSignPage')


}




const getMainPage = (req,res)=> {

    postSchema.find().sort({ createdAt: -1 })
                        .then((data)=> {res.render('main', {post: data})}) 
                        .catch((err)=>console.log(err))

}


const sendPost = async (req,res)=> {

    const userPost = new postSchema(req.body)

        await userPost.save().then(()=> {
            res.render('main' )
        }).catch((er)=>  {console.log(er);})
}


const getPostPage = (req,res)=> {
    postSchema.find().sort({ createdAt: -1 })
                        .then((data)=> {res.render('posts', {post: data})}) 
                        .catch((err)=>console.log(err))

}




module.exports={getloginSignUpPage,getMainPage,sendPost,getPostPage}