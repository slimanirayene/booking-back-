let Patient = require("../models/patients");
let jwt = require("jsonwebtoken");

const GetInfo = async (req, resp) => {
	let token = req.header("TOKEN");
	let user_info = jwt.verify(token, "sheeeesh");
	console.log(user_info);

	if (!token || token.length == 0) {
		console.log("Token not sent yet", token);
		resp.status(403).send("User not founds");
	} else {
		Patient.find({ _id: user_info.user_id }, (err, accounts) => {
			// console.log(accounts);
			if (err == null && accounts.length > 0) {
				console.log(accounts);
				resp.status(200).json(accounts);
			} else {
				resp.status(300).json({ status: "Zebi !" });
			}
		});
	}
};

module.exports = GetInfo;
