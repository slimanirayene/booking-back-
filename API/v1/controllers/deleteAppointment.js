let Patient = require("../models/patients");
let jwt = require("jsonwebtoken");

let DeleteAppointment = async (req, res) => {
	let token = req.header("TOKEN");
	if (!token || token.length == 0) {
		console.log("Token not sent yet", token);
		res.status(403).send("User not founds");
	} else {
		try {
			console.log(req.body);
			let user = jwt.verify(token, "sheeeesh");
			let id = user.user_id;

			Patient.findOneAndUpdate(
				{ _id: id },
				{
					hasAnAppointment: false,
				}
			).exec((err, text) => {
				if (err == null) {
					res.status(200).json(text);
					console.log("profile state changed ");
				} else {
					res.status(300).send("NOT OK");
					console.log(err);
				}
			});
		} catch (err) {
			console.log("Token invalid", err);
			res.status(403).send("You're not authorized, login first");
		}
	}
};
module.exports = DeleteAppointment;
