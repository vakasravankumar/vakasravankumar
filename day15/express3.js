var express = require('express');
var router = express.router();

router.get('/',function(req,res){
    res.send("GET route on thinks.");
});

router.post('/',function(req,res){
    res.send("POST route on thinks.");
});


module.exports = router;