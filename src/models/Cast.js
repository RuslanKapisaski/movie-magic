import { Schema, model } from "mongoose";

const castSchema = new Schema({
	name: {
		type: String,
		required: [true, "Cast name is required!"],
		minLength: [5, "Cast name should be at least 5 characters long!"],
		match: [/^[a-zA-ZO-9 ]+$/, "Cast name has invalid characters!"],
	},
	age: {
		type: Number,
		required: [true, "Cast age is required!"],
		min: [1, "Cast age should be grater than or equal to 1!"],
		max: [120, "Cast age should be less than or equal to 120"],
	},
	born: {
		type: String,
		required: [true, "Born is required!"],
		min: [10, "Born place should be at least 10 characters!"],
		match: [/^[a-zA-Z0-9 ]+$/, "Born place has invalid characters!"],
	},
	imageUrl: {
		type: String,
		required: [true, "Cast image is required!"],
		match: [/^https?:\/\//, "Image url is not in valid format!"],
	},
});

const Cast = model("Cast", castSchema);

export default Cast;
