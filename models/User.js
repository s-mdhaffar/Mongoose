const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
	name          : String,
	email         : {
		type : String
	},
	subscribeDate : {
		type    : Date,

		default : Date.now
	}
});

module.exports = Mongoose.model('User', userSchema);
