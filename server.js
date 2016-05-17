var express = require('express');

var app = express();

app.use(express.static('public'));

app.listen(process.env.PORT, function(err, next){
	if(err) return next(err);
	console.log('Listening on port: ' + process.env.PORT)
});