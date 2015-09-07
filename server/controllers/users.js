var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return {
	add: function(req, res) {
			// console.log(req.body.name)
			var user = new User({name: req.body.name});
				user.save(function(err){
				if(err){
					console.log('add failed');
				}else {
					console.log('successfully added user');
					res.json(user);
					// console.log(user);
				}
			});
	},
	show: function(req, res){
		// User.add
	}
}
})();