import Movie from "../models/Movie-Old.js";

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
