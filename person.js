const Mongoose = require('mongoose');

const personSchema = new Mongoose.Schema({
	name           : { type: String, required: true },
	age            : Number,
	favouriteFoods : [ String ]
});

module.exports = Mongoose.model('person', personSchema);
