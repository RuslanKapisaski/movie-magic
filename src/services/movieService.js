import Movie from "../models/Movie.js";
import { Types } from "mongoose";

export default {
	async getAll(filter = {}) {
		// const query = await Movie.find(filter).lean(); => use lean to handle local with proto
		let query = await Movie.find({});

		if (filter.title) {
			query = query.find({ title: { $regex: filter.title, $options: "i" } });
		}
		if (filter.genre) {
			//result = result.where("genre").equals(filter.genre); Mongoose
			query = query.find({ genre: { $regex: filter.genre, $options: "i" } }); //MongoDb
		}

		if (filter.year) {
			//query = query.where("year").equals(filter.year); //Mongoose
			query = query.find({ year: Number(filter.year) }); //MongoDb
		}

		return query;
	},

	createMovie(data) {
		const movie = new Movie(data);
		movie.save();
	},

	async getOneById(movieId) {
		return await Movie.findOne({ _id: movieId });
	},

	async attach(movieId, castId) {
		const movie = await Movie.findById(movieId);
		movie.casts.push(castId);

		return movie.save();
	},
};
