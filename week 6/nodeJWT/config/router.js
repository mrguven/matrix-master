const express = require('express');
const checkToken=require('../middleware/middleware')
const router=express.Router();

const{getHomePage,makeRegister}= require('../controller/controller')


router.get('/', getHomePage)








router.post('/userRegister', makeRegister)









module.exports=router;