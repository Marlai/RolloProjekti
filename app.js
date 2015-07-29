var express = require('express');
var bodyParser = require('body-parser')
var db = require('./database');
var app = express();

//called for every request
app.use(function(req,res,next){
    console.log(req.method);
    next();
});

//serve static files from public folder
app.use('/', express.static('public'));

//parse body from post
app.use(bodyParser());

app.post('/contact',function(req,res){
   console.log(req.body);
   db.addPersonInfo(res,req.body);
});

app.listen(3000);