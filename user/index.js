const Express=require('express')
const userController=require('./user.controller')
const jwt=require('jsonwebtoken')
const router= Express.Router()


router.post('/register',userController.register)

router.post('/login',userController.login)

router.get('/getLoginStatus',function(req,res,next){
    var token=req.get("Authorization")
    try{
        var payload=jwt.verify(token,"mysecretkey")
        if(payload){
            res.status(200).send({
                message:"Token Verified"
            }) 
         console.log("token verification result",payload)
         }
    }
    catch{
        console.log("token is not valid")
        //401 Exception will come when we have wrong token..
        res.status(401).send()
    }
    
})

router.post('/forgot',userController.forgotPassword)

router.get('/search',userController.search)

router.post('/upload',userController.uploadImage)


router.put('/updateprofile',function(req,res,next){
    var token=req.get("Authorization")
    console.log(".....token",token)
    try{
        var payload=jwt.verify(token,"mysecretkey")
    }
    catch{
        console.log("token is not valid")
        //401 Exception will come when we have wrong token..
        res.status(401).send()
    }
    if(payload){
        req.body.email=payload.email
        next()
    }
    console.log("token verification result",payload)
},userController.updateProfile)

//middle ware functions
router.delete('/delete',function(req,res,next){
    var token=req.get("")
    console.log(".....token",token)
    try{
        var payload=jwt.verify(token,"mysecretkey")
    }
    catch{
        console.log("token is not valid")
        //401 Exception will come when we have wrong token..
        res.status(401).send()
    }
    if(payload){
        req.body.email=payload.email
        next()
    }
    console.log("token verification result",payload)
},userController.deleteAccount)



module.exports=router
