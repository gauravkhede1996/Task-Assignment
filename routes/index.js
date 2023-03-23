//importing engine
const express=require('express');
//capture all routes functionality provided by express into router variable
const router=express.Router();
//importing userController where I have defined each functionality
const userController=require('../controllers/userControllers');
//separate routes for get and post method
router.get('/',function(req,res){
    return res.render('home');
});
router.post('/signup',userController.signUp);
router.post('/signin',userController.signIn);
router.post('/signout',userController.signOut);
//exporting the router 
module.exports=router;