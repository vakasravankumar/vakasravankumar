var express = require('express');
var app = express();

app.get('/sravan',function(req,res){
    res.send("Welcome to express js testing by human...!!!!");
});

app.listen(5000);