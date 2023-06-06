const express = require('express');
const checkToken=require('../middleware/middleware')
const router=express.Router();

const getHomePage= require('../controller/controller')
 
const makeRegister= require('../controller/userController')


router.get('/', getHomePage)








router.post('/userRegister', makeRegister)









module.exports=router;