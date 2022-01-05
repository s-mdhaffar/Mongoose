const Mongoose = require('mongoose');
const { execMap } = require('nodemon/lib/config/defaults');
const run = require('nodemon/lib/monitor/run');
const person = require('./person');

Mongoose.connect('mongodb://localhost/contact', { useNewUrlParser: true, useUnifiedTopology: true }, () =>
	console.log('connected')
);

// exec();
// async function exec () {
// 	const person1 = new person({ name: 'Omar', age: 1, favouriteFoods: [ 'banana', 'apple' ] });
// 	await person1.save();
// 	console.log(person1);
// }
// arrayOfPeople();
// async function arrayOfPeople () {
// 	const data = await person.create([
// 		{ name: 'Khadija', age: 4, favouriteFoods: [ 'Candy', 'Chocolat' ] },
// 		{ name: 'Asma', age: 26, favouriteFoods: [ 'Pizza', 'Cheese' ] },
// 		{ name: 'Sami', age: 39, favouriteFoods: [ 'Chakchouka', 'Couscous' ] }
// 	]);
// }

// exec();
// async function exec () {
// 	const data = await person.findById('61d5fb03f999cdf48be4794d');
// 	console.log(data);
// }

// exec();
// async function exec () {
// 	const data = await person.find({ name: 'Khadija' });
// 	console.log(data);
// }

// exec();
// async function exec () {
// 	const data = await person.find();
// 	console.log(data);
// }

exec();
async function exec () {
	const data = await person.findOne({ name: 'Asma' });
	console.log(data);
}
