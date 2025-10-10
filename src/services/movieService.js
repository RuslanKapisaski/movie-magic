import Movie from "../models/Movie.js";

export default {
  async getAll(filter) {
    // const result = await Movie.find(filter).lean(); => use lean to handle local with proto
    const result = await Movie.find(filter);
    return result;
  },

  createMovie(data) {
    const movie = new Movie(data);
    movie.save();
  },

  async getOneById(movieId) {
    return await Movie.findOne({ _id: movieId });
  },
};
