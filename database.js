//this module connects to mongodb and defines needed documents. Also contains functions to make queries for database.
var mongoose = require('mongoose');
//connect to db
mongoose.connect('mongodb://localhost/person_info',function(err,succ){
   if(err){
    console.log('failed to connect'+ err);
   }
    else{
     console.log('You are in');   
    }
   
});
//This is the document "The schema" of the data model
var personInfo = mongoose.Schema({
    user_name: String,
    user_address: String,
    user_mail: String,
});
//PersonInfoModel object contains the needed function for CRUD (create, read, update, abd delete) operations
var PersonInfoModel = mongoose.model('PersonInfo',personInfo);
//this function stores the user information to database
exports.addPersonInfo = function(res,data){
    var temp = new PersonInfoModel();
    temp.user_name = data.user_name;
    temp.user_address = data.user_address;
    temp.user_mail = data.user_mail;
    
    temp.save();
    res.send("Your information " + data + " was saved in database");
}