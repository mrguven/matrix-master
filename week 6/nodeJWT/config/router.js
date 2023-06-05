const express = require('express');

const router=require('Router').Router();

const{getHomePage,getLogInPage}= require('../controller/controller')


router.get('/', getHomePage)

router.get('/login', getLogInPage)














module.exports=router;