//require express for routing
var express= require('express');
//require bodyParser to pull data from page
var bodyParser = require('body-parser');
//require pug for templating
var pug = require('pug');
//require path
var path = require('path');

// Models ---------REQUIRE THE MODELS FOLDER
var db = require('./models');
//express app
var app = express();
//set PORT to first available or 3000
var PORT = 3000;
//set 'public' folder as static directory
app.use(express.static('public'));
//enable bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

//set pug as view engine
app.set('view engine', 'pug');
//set the views source to the 'views' folder in the current directory
app.set('views', path.join(__dirname, 'views'));

//default path
app.get('/', function (request, result) {
	result.render('layout');
});

// Routes------------REQUIRE ROUTES HERE----------

//-------------INCOMPLETE; CONNECT TO MONGOOSE-----------------
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
//error handling
app.use(function (error, request, result, next) {
	//if there are no errors, continue
	if (!error) {
		next();
	}
	//otherwise console.log the error
	console.log(error);
	result
		.status(500)
		.json({
			error: 500,
			message: error.message
		});
});