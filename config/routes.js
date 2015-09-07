var users = require('./../server/controllers/users.js');
var questions = require('./../server/controllers/questions.js')
var answers = require('./../server/controllers/answers.js')

var bodyparser = require('body-parser');

module.exports = function(app) {
	app.use(bodyparser.json());
	// //friends routes
	app.post('/addUser', function(req, res) {
	users.add(req,res);
	})
	app.get('/questions', function(req, res){
	questions.show(req, res);
	})
	app.post('/addQ', function(req, res) {
	questions.addQ(req, res);	
	})
	app.get('/getQ/:id', function(req, res){
	questions.getQ(req, res);
	})
	app.post('/addAnswer', function(req, res){
	answers.add(req, res);
	})
	app.post('/upvote', function(req, res){
	answers.upvote(req, res);
	})

}