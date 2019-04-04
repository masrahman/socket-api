User = require('./userModel');

exports.new = function(req, res){
	var user = new User();
	user.name = req.body.name;
	user.sessionId = '';
	user.save(function(err){
		res.json({
			message: 'success',
			data: user
		});
	});
};

exports.addsession = function(req, res){
	User.findById(req.params.id, function(err, user){
		if(err)
			res.send(err);

		user.sessionId = req.body.session;
		user.save(function(err, user){
			res.json({
				message: 'success',
				data: user
			});
		});
	});
};

exports.get = function(req, res){
	User.findById(req.params.id, function(err, user){
		res.json({
			message: 'success',
			data: user
		});
	});
};

exports.getname = function(req, res){
	User.findOne({name: req.body.name}, (err, user) => {
		res.json({
			message: 'success',
			data: user
		});
	})
};
