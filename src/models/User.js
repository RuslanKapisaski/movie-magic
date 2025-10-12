import { Schema, model } from "mongoose";

const userSchema = new Schema({
	email: {
		type: String,
		required: [true, "User email is required!"],
	},
	password: {
		type: String,
		required: [true, "User Passord is required!"],
	},
});

const User = model("User", userSchema);

export default User;
