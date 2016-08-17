var express = require('express');
var app = express();
var middleware = require('./middleware.js');


app.use(middleware.logger);

/*
app.get('/', function(request, response) {
	response.send('Hello Express!');
});
*/

app.get('/about', function(request, response) {
	response.send('About Us!');
});
app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
	// message when started
	console.log('Express server started!');
}); // port 3000  (zelf)