var fs = require('fs');
fs.unlink('apple1.txt', function(err,){
    if(err) throw err;
    console.log('File deleted>>!!');
});