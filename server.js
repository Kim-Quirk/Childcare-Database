const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
// const Router = require("./routes/routes")
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

const childrenRoutes = require('./routes/children.js');
// const resultRoutes = require('./routes/result');
// const sessionRoutes = require('./routes/session');

app.use(cors({
  origin: '*'
}));

app.use(express.json());

const uri = process.env.MONGO_DB_URL;

mongoose.connect(process.env.MONGO_DB_URL).catch((err) => {
	console.log(err);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(childrenRoutes);

app.listen(PORT, () => {
  console.log("Server is running at port 3000");
});