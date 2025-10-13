import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
	email: {
		type: String,
		required: [true, "User email is required!"],
		unique: [true, "Email should be unique!"]
	},
	password: {
		type: String,
		required: [true, "User Passord is required!"],
	},
});

userSchema.pre("save", async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

const User = model("User", userSchema);

export default User;
