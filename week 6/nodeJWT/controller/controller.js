const express = require('express');
const {userSchema,userLogIn,postSchema} = require('../model/userModel');




const getloginSignUpPage= (req,res)=> {
res.render('logSignPage')


}




const getMainPage = (req,res)=> {
res.render('main')
}


const sendPost = async (req,res)=> {

    const userPost = new postSchema(req.body)

        await userPost.save().then(()=> {
            res.render('main', )
        }).catch()
}




const getPost =    (req,res) => {
    postSchema.find().sort({ createdAt: -1 })
                        .then((data)=> {res.render('main', {post: data})}) 
                        .catch((err)=>console.log(err))

}



module.exports={getloginSignUpPage,getMainPage,sendPost,getPost}