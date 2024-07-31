var http = require('http');

var fs = require('fs');
fs.rename('apple.txt', 'renamedapple.txt', function(err,){
    if(err) throw err;
    console.log('File renamed>>!!');
});