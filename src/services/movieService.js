import Movie from "../models/Movie.js";

export default {
  async getAll(filter) {
    const result = await Movie.find(filter).lean();
    return result;
  },

  createMovie(data) {
    const movie = new Movie(data);
    movie.save();
  },

  getOneById(movieId) {
    return Movie.findOne({ _id: movieId });
  },
};
