var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send("Welcome to express js testing by human...!!!!");
});

app.listen(3000);