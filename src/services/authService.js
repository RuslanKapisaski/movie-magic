import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { JWT_SECRET } from "../config/constants.js";
import User from "../models/User.js";

export default {
	register(userData) {
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
