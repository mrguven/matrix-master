const express=require('express');

const router=express.Router();

const {getHomePage,getRegisterPage,getCommentPage}= require('../controller/taskController')


router.get('/', getHomePage)

router.get('/register', getRegisterPage)

router.get('/comment', getCommentPage)










module.exports= router