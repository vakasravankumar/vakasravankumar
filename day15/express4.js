var express = require('express');
var app = express();

var things = requier('./express3.js');

app.use('/sravan',things);

app.listen(3000);
