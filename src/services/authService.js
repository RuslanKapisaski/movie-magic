import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config/constants.js";
import User from "../models/User.js";

export default {
	async register(userData) {
		//email validation
		const user = await User.exists({ email: userData.email });
		if (user) {
			throw new Error("User with this email already exists!");
		}
		//re-pass validation
		if (userData.password !== userData.rePassword) {
			throw new Error("Password missmatch!");
		}
		return User.create(userData);
	},

	async login(email, password) {
		const user = await User.findOne({ email });

		if (!user) {
			throw new Error("Invalid user!");
		}

		const isPassValid = await bcrypt.compare(password, user.password);

		if (!isPassValid) {
			throw new Error("Invlid user!");
		}

		const payload = {
			id: user.id,
			email: user.email,
		};

		const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });

		return token;
	},
};
