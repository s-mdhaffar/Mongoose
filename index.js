require('dotenv').config();
const { Router } = require('express');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const Mongoose = require('mongoose');
const person = require('./person');
const app = express();
const router = express.Router();
const User = require('./models/User');

mongdb();
async function mongdb () {
	try {
		Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () =>
			console.log('DataBase connected')
		);
	} catch (error) {
		console.log(error);
	}
}

app.use(express.json());

app.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		res.status(500).json({ Message: error.message });
	}
});

app.get('/:id', async (req, res) => {
	try {
		const users = await User.findById(req.params.id);
		res.json(users);
	} catch (error) {
		res.status(500).json({ Message: error.message });
	}
});

app.post('/', async (req, res) => {
	const user1 = new User({
		name  : req.body.name,
		email : req.body.email
	});
	try {
		const newUser = await user1.save();
		res.status(201).send(newUser);
	} catch (error) {
		res.status(400).json({ Message: error.message });
	}
});

app.delete('/:id', async (req, res) => {
	try {
		await User.findById(req.params.id).remove();
		res.send('deleted');
	} catch (error) {
		res.status(500).json({ Message: error.message });
	}
});

app.patch('/:id', async (req, res) => {
	try {
		const users = await User.findById(req.params.id).updateOne({ name: req.body.name, email: req.body.email });
		res.status(201).send(users);
	} catch (error) {
		res.status(500).json({ Message: error.message });
	}
});

app.listen(5000, () => console.log('server listening on port 5000'));

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

// exec();
// async function exec () {
// 	const data = await person.findOne({ name: 'Asma' });
// 	console.log(data);
// }
