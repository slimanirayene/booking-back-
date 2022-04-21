var User = require("../models/users");
var fs = require("fs");

let SignUp = async (req, res, next) => {
	console.log(req.body);

	let email = req.body.email;
	let user_name = req.body.username;
	let password = req.body.password;
	let firstName = req.body.firstname;
	let lastName = req.body.lastName;
	let city = req.body.city;
	let district = req.body.district;

	User.find({ username: user_name }, async (err, results) => {
		if (err == null && results.length > 0) {
			res.status(300).json({ status: "This Account was already created" });
			console.log(results);
		} else {
			try {
				let doc = new User({
					email: email,
					username: user_name,
					password: password,
					firstName: firstName,
					lastName: lastName,
					city: city,
					district: district,
				});
				await doc.save();
				res.status(200).json({ status: "User signed up succefully" });
			} catch (err) {
				res.status(300).json({ status: "Could not create account" });
				console.log(err);
			}
		}
	});
};
module.exports = SignUp;
