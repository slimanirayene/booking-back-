let jwt = require("jsonwebtoken");
let Patient = require("../models/patients");

const Login = async (req, resp) => {
	let user = req.body.user_name || "";
	let password = req.body.password || "";
	let token_data = undefined;

	Patient.find({ user_name: user, password: password }, (err, accounts) => {
		if (err == null && accounts.length > 0) {
			let account = accounts[0];
			console.log(account);

			token_data = {
				user_id: account._id,
				user_name: account.username,
			};

			let token = jwt.sign(token_data, "sheeeesh");

			resp.status(200).json({
				status: "succeded",
				token: token,
			});
		} else {
			resp.status(300).json({ status: "Token creation denied! try again" });
		}
	});
};

module.exports = Login;
