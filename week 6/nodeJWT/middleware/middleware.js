
const jwt = require('jsonwebtoken');






const checkToken = (req,res,next)=> {
       const isToken= req.cookies.userToken;
    if(!isToken){
        next()
    }else {
        res.redirect('/main')
    }


}


const checkTokenPage = (req,res,next) => {
    const isToken= req.cookies.userToken;

    if(isToken){
          jwt.verify(isToken, process.env.JWT_SECRET, async (err, userInfo) => {
            if(err){
                console.log(err);
            } else {
               res.locals.user = userInfo.userObj.userName;
               res.locals.usId = userInfo.userObj.userId;
                
                next();
            }
        })
    }else {
        res.locals.user = false;
        res.redirect('/')
    }

}


const ifToken = async(req,res,next) => {
    const isToken= req.cookies.userToken;

    if(isToken){
        jwt.verify(isToken, process.env.JWT_SECRET, async (err, userInfo) => {
          if(err){
              console.log(err);
          } else {
             res.locals.user = userInfo.userObj.userName;
             res.locals.usId = userInfo.userObj.userId;
             console.log('midd'+res.locals.usId);
              next();
          }
      })}
      else {
        
        res.redirect('/')
    }


}






module.exports= {checkToken,checkTokenPage,ifToken};