var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Login = require("./Api/V1/controllers/login");
var SignUp = require("./Api/V1/controllers/signup");
var cors = require("cors");
var app = express();

app.use(bodyParser());
app.use(cors());
app.use(express.static("uploads"));

app.post("/login", Login);
app.post("/signup", SignUp);

mongoose
	.connect(
		"mongodb+srv://slimanirayene:0000@pitchecluster.qost1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
	)
	.then((db) => {
		console.log("Database connected");
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(999);
