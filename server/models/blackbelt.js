//user.js model
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: String
});
var QuestionSchema = new mongoose.Schema({
	name: String,
	question: String,
	description: String,
	answers: []
});
var AnswerSchema = new mongoose.Schema({
	answer: String,
	details: String,
	name: String,
	like: Number,
})

mongoose.model('User', UserSchema);
mongoose.model('Question', QuestionSchema);
mongoose.model('Answer', AnswerSchema);