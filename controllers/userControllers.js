//importing the user module which i have created in models folder 
const User=require('../models/userSchema');
//create function for signup
module.exports.signUp=async function(req,res){
    // console.log(req.body);
    let user=await User.find({email:req.body.email});
    //if we found a user then we should say user already exist
    if(user.length>0){
        console.log('user',user);
        return res.render('userAlreadyExist',{
            user:user[0]
        });
    }else{
        console.log(req.body," is the requested Body");
        //if user doesnot exist we can check if they have enter password and confirm password same?
        if(req.body.password!==req.body.confirmPassword){
            return res.end('<h1>Go Back becuase Password and Confirm Password do not match</h1>')
        }
        //User is not in our database so we can create new user and logged him in
        let newUser=await User.create({
            email:req.body.email,
            name:req.body.name,
            password:req.body.password
        });
        return res.render('welcome',{
            user:newUser
        });
    }
}
//I have create signin function
module.exports.signIn=async function(req,res){
    let user=await User.find({email:req.body.email});
    //If we have this user in our mongodb database then we should permit him to logged in otherwise Send him/her to signin page
    if(user.length>0){
        return res.render('welcome',{
            user:user[0]
        })
    }else{
        console.log('User not present');
        return res.render('signin');
    }
}
//create function for signout
module.exports.signOut=function(req,res){
    if(req.body.userEmail){
        return res.render('home')
    }else{
        return res.redirect('back');
    }
}