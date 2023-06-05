const express = require('express');

const router=express.Router();

const{getHomePage,getLogInPage}= require('../controller/controller')


router.get('/', getHomePage)

router.get('/login', getLogInPage)














module.exports=router;