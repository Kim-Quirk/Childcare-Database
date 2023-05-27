if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(bodyParser.urlencoded()) //for form data sent through <form></form> Rest apis don't usually use these forms
app.use(bodyParser.json()); //for parsing and sending json data

const childrenRoutes = require('./routes/childData.js');

app.use(childrenRoutes);

app.use('/', (req, res, next) => {
	res.status(400).json({
		message: 'Page Not Found',
	});
});

const server = app.listen(PORT);

mongoose.connect(process.env.MONGODB_URI).catch((err) => {
	console.log(err);
});