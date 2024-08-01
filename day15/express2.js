var express = require('express');
var app = express();

app.get('/home',function(rsq,res){
    res.send("Welcome to home page!")
});

app.get('/contact',function(rsq,res){
    res.send("you just called the post method at 'contact!\n")
});

app.get('/post',function(rsq,res){
    res.send("HTTP method doesn't have any any effect onthis route!")
});

app.listen(2000);