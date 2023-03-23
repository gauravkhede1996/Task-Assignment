const mongoose=require('mongoose');
//ITU3ueg9T8VuKb7I
//gauravkhede1
mongoose.connect('mongodb+srv://gauravkhede1:ITU3ueg9T8VuKb7I@cluster0.tqyd1ul.mongodb.net/assignmentTask?retryWrites=true');
const db=mongoose.connection;
db.on('error',console.error.bind('Error connecting to MongoDb'));
db.once('open',function(){
    console.log('Connection with database is successfull');
})
module.exports=db;