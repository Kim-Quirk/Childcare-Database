// Initlize our variables
const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();

/*
This is where we inilitze our app setup. 
It will listen for requests sent to our backend and communicate with the databse.
*/

// Set up the port we'll be using
const PORT = process.env.PORT || 3000;

// Get our app started
const app = express();

// Set up our routes
const childrenRoutes = require('./routes/children.js');
const reportRoutes = require('./routes/report.js');

// Set up CORS so that it will allow communication between here and our local host.
// In the future, this may need to be adjusted so it's more secure and doesn't allow any and all origins.
app.use(cors({
  origin: '*'
}));

// Initilize our app
app.use(express.json());

// Set our database URL we'll be using
const uri = process.env.MONGO_DB_URL;

// Connect to our MongoDB database
mongoose.connect(uri).catch((err) => {
	console.log(err);
});

const db = mongoose.connection;

// Catch any errors...
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully"); //Send a message once successful connection is made
});

// Initlize our app's routes
app.use(childrenRoutes);
app.use(reportRoutes);

// Listen for requests sent to our app
app.listen(PORT, () => {
  console.log("Server is running at port 3000");
});