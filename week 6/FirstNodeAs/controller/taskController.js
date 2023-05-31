
const express=require('express')
const Comment = require('../model/commentModel')

const asyncHandler= require('express-async-handler')


const getHomePage = (req,res)=> {

    res.status(200).render('index.ejs')
}



const getRegisterPage = (req,res) => { 
    res.status(200).render('register.ejs')
}




const sendComment = (req,res)=> {

    const userNm= req.body.userName;
const name=req.body.name

console.log(userNm);
console.log(name);
    
        const blog= new Comment({
                 userName :userNm,
                    name:name
                })
            console.log(req.body.userName);
            console.log(req.body.name);
                  blog.save().then(()=>{res.status(201).redirect('comment')})
                 .catch(()=> redirect('404.html'));
                console.log(blog);
               
                
                console.log('did this function run');
         }
                 
         
         
         const getCommentPage =    (req,res) => {
        Comment.find().sort({ createdAt: -1 })
                            .then((data)=> {res.render('comment.ejs', {Comment: data})}) // this is not good. Maybe it can be andere solution. I made two times render same page in this function.
                            .catch((err)=>console.log(err))
                           
            }




const getFullArticle =(req,res)=> {
            Comment.findById(req.params.id).then((result)=> {
                res.render('fullArticle', {Comment:result})
            }).catch((err)=>{
                console.log(err);
            })
}


const deleteComment = (req,res)=> {


    Comment.findByIdAndDelete(req.params.id)
    .then(()=>res.redirect('/comment')).catch(()=>res.redirect('404.html'))
    
}

const addCommentPage = (req,res)=> {

    res.render('userComment')
}

const getBackPage =(req,res)=> {
    res.redirect('/comment')
}


const getEditComment = (req,res)=> {
    
    Comment.findById(req.params.id).then()

    res.redirect('/addComment');
}

module.exports={
    getHomePage,
    getRegisterPage,
    getCommentPage,
    sendComment,
    getFullArticle,
    deleteComment,addCommentPage,getBackPage,getEditComment
}