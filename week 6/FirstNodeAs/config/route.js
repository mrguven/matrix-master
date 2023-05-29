const express=require('express');

const router=express.Router();

const {getHomePage,getRegisterPage}= require('../controller/taskController')


router.get('/', getHomePage)

router.get('/register', getRegisterPage)











module.exports= router