//Ihave user MVC architecture and separate folder for models , views and Controllers. I have all the modules and functions in controller and all the schemas
// are in model folder and all the EJS files are in view folder to render 


//import express as engine
const express=require('express');
//capture functionality of express into our app variable
const app=express();
//I am running my project on port 8000
const port=8000;
//connect database with our main file to connect to cloud mongo atlas
const db=require('./config/mongoose');

//setting up my view engine as ejs since I am using MVC architecture
app.set('view engine','ejs');
//linking my views folder
app.set('views','./views');
//I have to add this line above router inorder to get the data from the form 
app.use(express.urlencoded());
// creating separate folder for all the routes so link that path
app.use('/',require('./routes'));
//finally listening to my port either give error or success
app.listen(port,function(err){
    if(err){
        console.log("Error connecting to port ",port);
        return;
    }
    console.log("You app is up and running at port",port);
})