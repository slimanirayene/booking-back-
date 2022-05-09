var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
var Login = require("./Api/V1/controllers/login");
var SignUp = require("./Api/V1/controllers/signup");
// var DeleteAppointment = require("./Api/V1/controllers/deleteAppointment");
var SetAppointment = require("./Api/V1/controllers/setAppointment");
var GetData = require("./Api/V1/controllers/getAppointments");
var GetInfo = require("./API/v1/controllers/getInfo");

app.use(bodyParser());
app.use(cors());
app.use(express.static("uploads"));

app.post("/login", Login);
app.post("/signup", SignUp);
app.post("/add", SetAppointment);
// app.post("/delete", DeleteAppointment);
app.get("/appointments", GetData);
app.get("/getinfo", GetInfo);

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
