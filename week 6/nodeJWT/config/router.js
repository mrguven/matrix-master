const express = require('express');

const router=express.Router();

const{getHomePage,getLogInPage,getRegisterPage,makeRegister}= require('../controller/controller')


router.get('/', getHomePage)

router.get('/login', getLogInPage)


router.get('/register', getRegisterPage)



router.post('/userRegister', makeRegister)









module.exports=router;