var fs = require('fs');

fs.writeFile('apple1.txt' , 'DO YOU UNDERSTAND !', function(err){
    if(err) throw err;
    console.log('saved!!');
});