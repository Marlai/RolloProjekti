var express = require('express');
var bodyParser = require('body-parser')
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
   console.log(req.body.user_name);
   res.send("Your data is saved");
});

app.listen(3000);