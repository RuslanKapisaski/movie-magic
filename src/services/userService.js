import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "SDASDASFSDFEWF1232153";

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
