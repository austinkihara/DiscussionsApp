
var express = require('express');
var path= require('path');
var app = express();
require('./config/mongoose.js');
require('./config/routes.js')(app);


app.use(express.static(path.join(__dirname, './client')));

app.listen(1338, function() {
	console.log('cool stuff on: 1338');
});