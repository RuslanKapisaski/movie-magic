import Movie from "../models/Movie.js";

export default {
  getAll(filter) {
    return Movie.find(filter);
  },

  createMovie(data) {
    const movie = new Movie(data);
    movie.save();
  },

  getOneById(movieId) {
    return Movie.findOne({ _id: movieId });
  },
};
