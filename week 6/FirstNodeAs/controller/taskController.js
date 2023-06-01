
const express=require('express')
const {Comment,subComment} = require('../model/commentModel')

const asyncHandler= require('express-async-handler')
const { round } = require('lodash')


const getHomePage = (req,res)=> {

    res.status(200).render('index.ejs')
}



const getRegisterPage = (req,res) => { 
    res.status(200).render('register.ejs')
}




const sendComment = (req,res)=> {

    const title1= req.body.title;
const post1=req.body.post

console.log(title1);
console.log(post1);
    
        const blog= new Comment({
                 title :title1,
                    post:post1
                })
            console.log(req.body.title);
            console.log(req.body.post);
                  blog.save().then(()=>{res.status(201).redirect('comment')})
                 .catch(()=> redirect('404.html'));
                console.log(blog);
               
                
                console.log('did this function run');
         }
                 
         
         
         const getCommentPage =    (req,res) => {
        Comment.find().sort({ createdAt: -1 })
                            .then((data)=> {res.render('comment.ejs', {blog: data})}) // this is not good. Maybe it can be andere solution. I made two times render same page in this function.
                            .catch((err)=>console.log(err))
                           

                           

            }

            const getSubPost=(req,res)=>{
                subComment.find().sort({ createdAt: -1 })
                .then((data)=> {res.render('comment', {subblog: data})}) 
                .catch((err)=>console.log(err))
               
            
                
            }




const getFullArticle =(req,res)=> {
            Comment.findById(req.params.id).then((result)=> {
                res.render('fullArticle', {blog:result})
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
    
    Comment.findById(req.params.id).then((result)=> {
        res.render('editedComment', {blog:result})
    }).catch((err)=>{
        console.log(err);
    })
}

const updateComment=(req,res)=> {
    Comment.findByIdAndUpdate(req.params.id,req.body,{new: true})
    .then((result)=> res.render('fullarticle', {blog:result})).catch(()=> res.render('404'))

}


const makeCommentPage= (req,res)=> {
    res.status(200).render('makeSubCommentPage')
}

const saveSubCom=(req,res)=> {

    const subUserName= req.body.title;
const subUserPost=req.body.post


    
        const subblog= new subComment({
                 title :subUserName,
                    post:subUserPost
                })
            console.log(req.body.title);
            console.log(req.body.post);
                  subblog.save().then(()=>{res.status(201).redirect('/comment')})
                 .catch(()=> res.render('404'));
                console.log(subblog);
               

}



module.exports={
    getHomePage,
    getRegisterPage,
    getCommentPage,
    sendComment,
    getFullArticle,
    deleteComment,addCommentPage,getBackPage,getEditComment,updateComment,
    makeCommentPage,saveSubCom,getSubPost
}