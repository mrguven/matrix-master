const express = require('express');
const userInfo = require('../model/userModel');
const postSchema = require('../model/postModel')


const getdata= postSchema.find().sort({ createdAt: -1 })




const getloginSignUpPage= (req,res)=> {
res.render('logSignPage')


}




const getMainPage = (req,res)=> {

    postSchema.find().sort({ createdAt: -1 }).populate("user")
                        .then((data)=> {res.render('main', {post: data})}) 
                        .catch((err)=>console.log(err))

}


const sendPost = async (req,res)=> {

    let postObj = {
        ...req.body,
        user: req.params.id,
        
        
    };

    const userPost = new postSchema(postObj)
console.log(postObj);
        await userPost.save().then(()=> {
            res.redirect('/main' )
        }).catch((er)=>  {console.log(er);})
}


const getPostPage = (req,res)=> {
    postSchema.find().sort({ createdAt: -1 })
                        .then((data)=> {res.render('posts', {post: data})}) 
                        .catch((err)=>console.log(err))

}




module.exports={getloginSignUpPage,getMainPage,sendPost,getPostPage}