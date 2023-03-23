const mongoose=require('mongoose');
// creating schema for user where email is unique and required and password is required 
const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    }
},{
    timestamp:true
});
const User=mongoose.model('User',userSchema);
//exporting the User module from this file
module.exports=User;