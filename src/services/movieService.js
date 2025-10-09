import Movie from "../models/Movie.js";

export default {
	getAll() {
		return Movie.find();
	},

	createMovie(data) {
		const movie = new Movie(data);
		movie.save();
	},

	getById(movieId) {
		return Movie.find({ _id: movieId });
	},
};
