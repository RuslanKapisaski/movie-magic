import User from "../models/User.js";
import bcrypt from "bcrypt";
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
	},
};
