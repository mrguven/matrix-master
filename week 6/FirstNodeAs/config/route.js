const express=require('express');

const router=express.Router();

const {getHomePage,getRegisterPage,
    getCommentPage,sendComment,
    getFullArticle,deleteComment,addCommentPage,
    getBackPage,getEditComment}= require('../controller/taskController')


router.get('/', getHomePage)

router.get('/register', getRegisterPage)

router.get('/comment', getCommentPage)

router.post('/sendComment', sendComment)

router.get('/fullarticle/:id', getFullArticle)



router.post('/deleteUser/:id', deleteComment)

router.get('/addComment', addCommentPage)

router.get('/back', getBackPage)


router.get('/editArticle/:id', getEditComment)




module.exports= router