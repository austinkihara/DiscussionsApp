var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
	return {
	addQ: function(req, res) {
			// console.log(req.body.name)
			var question = new Question({name: req.body.name, question: req.body.question, description: req.body.description});
				question.save(function(err){
				if(err){
					console.log('add failed');
				}else {
					console.log('successfully added Q');
					res.json(question);
					// console.log(user);
				}
			});
	},
	show: function(req, res){
		Question.find({}, function(err, results){
			if(err){
				console.log(err);
			}else {
				res.json(results);
			}
		});
	},
	getQ: function(req, res){
		Question.findOne({_id: req.params.id}, function(err, results){
			if(err){
				console.log(err);
			}else {
				res.json(results);
			}
		});
	}
	//end
}
})();