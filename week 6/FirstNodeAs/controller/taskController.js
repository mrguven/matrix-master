
const comment = require('../model/commentModel')

const asyncHandler= require('express-async-handler')


const getHomePage = (req,res)=> {

    res.status(200).render('index.ejs')


}



const getRegisterPage = (req,res) => { 
    res.status(200).render('register.ejs')
}

const getCommentPage = (req,res) => {

    res.status(200).render('comment.ejs')
}


const sendComment = (req,res)=> {

    const commentBody= req.query.comment;


    
    console.log(commentBody);
// commentBody=new comment()


}




module.exports={
    getHomePage,
    getRegisterPage,
    getCommentPage,
    sendComment
}