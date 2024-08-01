var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();


app.get('/',function(req,res){
    res.reader('index');

});


app.set('view engine','ejs');
app.set('views','./views');



app.use(bodyParser.json());


app.use(bodyParser.urlencoded({extended:true}));
app.use(exprses.static('public'));

app.post('/',function(req,res){
    console.log(req.body);
    res.send('recieved your request');
});
app.listen(7000);