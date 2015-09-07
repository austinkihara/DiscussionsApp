var mongoose = require('mongoose');
var Answer = mongoose.model('Answer');
var Question = mongoose.model('Question');

module.exports = (function(){
	return{
	add: function(req, res) {
		console.log(req.body);
	var answer = new Answer({
		answer:req.body.answer,
		details:req.body.details,
		name: req.body.name,
		like:0});
	Question.findOne({_id:req.body.question_id}, function(err, question){
		question.answers.push(answer);
		question.save(function(err){
		answer.save(function(err){
			if(err){
					console.log('add failed');
					res.json(false);
				}else {
					console.log('successfully added answer');
					res.json(answer);
				}
			});
			// console.log(question);	
			})
		});
	},
	upvote: function(req, res){
		// console.log(req.body.question_id);
		var ObjectId = require('mongoose').Types.ObjectId;
		// var query = {"_id:": req.body.question_id, "answers._id":req.body.id};
		// var update = { $inc: {"answers.$.like":1}};

		Question.findOneAndUpdate({_id: new ObjectId(req.body.question_id), "answers._id":new ObjectId(req.body.id)}, { $inc: {"answers.$.like":1}}, function(err, question){
			// question.save(function(err){
			if(err){
					console.log('add failed');
					res.json(false);
				}else {
					console.log('successfully updated answer');
					res.json(question);
				}
			});
		// })
	}
}
})();
