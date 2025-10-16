import { Schema, model, Types } from "mongoose";

const movieSchema = new Schema({
	title: {
		type: String,
		required: [true, "Movie title is required!"],
		minLength: [5, "Title should be at least 5 characters long!"],
		match: [/^[a-zA-Z0-9 ]+$/, "Title has invalid characters! "],
	},
	category: {
		type: String,
		enum: {
			values: ["tv-show", "animation", "movie", "documentary", "short-film"],
			message: "Your category is invalid!",
		},
		required: [true, "Movie category is required!"],
	},
	genre: {
		type: String,
		required: [true, "Genre is required"],
		minLength: [5, "Genre should be at least 5 characters long!"],
		match: [/^[a-zA-Z0-9 ]+$/, "Genre has invalid characters!"],
	},
	director: {
		type: String,
		required: [true, "Genre is required"],
		minLength: [5, "Genre should be at least 5 characters long!"],
		match: [/^[a-zA-Z0-9 ]+$/, "Genre has invalid characters!"],
	},
	year: {
		type: Number,
		require: [true, "Year is required!"],
		min: [1900, "Year should be greater than 1900!"],
		max: [2024, "Year should be less than 2024!"],
	},
	imageUrl: {
		type: String,
		required: [true, "Movie image is required!"],
		match: [/^https?:\/\//, "Image url is invalid format!"],
	},
	rating: {
		type: Number,
		min: [1, "Rating should be greater or equal to 1!"],
		max: [5, "Rating should be less or equal to 5!"],
	},
	description: {
		type: String,
		minLength: [20, "Description should be at least 20 characters long!"],
		match: [/^[a-zA-Z0-9\s\S]+$/, "Description has invalid characters"],
	},
	casts: [
		{
			type: Types.ObjectId,
			ref: "Cast",
		},
	],
	creator: {
		type: Types.ObjectId,
		ref: "User",
		required: [true, "Movie should have creator"],
	},
});

//movie model
const Movie = model("Movie", movieSchema);

export default Movie;
