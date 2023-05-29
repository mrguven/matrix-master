const express=require('express');

const router=express.Router();

const {getHomePage,getRegisterPage,getCommentPage,sendComment}= require('../controller/taskController')


router.get('/', getHomePage)

router.get('/register', getRegisterPage)

router.get('/comment', getCommentPage)

router.post('/sendComment', sendComment)








module.exports= router