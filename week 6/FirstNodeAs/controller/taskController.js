

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




module.exports={
    getHomePage,
    getRegisterPage,
    getCommentPage
}