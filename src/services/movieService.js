import Movie from "../models/Movie.js";

export default {
  getAll(filter = {}) {
    // const query = await Movie.find(filter).lean(); => use lean to handle local with proto
    let query = Movie.find();

    if (filter.title) {
      query = query.find({ title: { $regex: filter.title, $options: "i" } });
    }
    if (filter.genre) {
      //result = result.where("genre").equals(filter.genre); Mongoose
      query = query.find({ genre: { $regex: filter.genre, $options: "i" } }); //MongoDb
    }
    console.log(filter.year);

    if (filter.year) {
      //query = query.where("year").equals(filter.year); //Mongoose
      query = query.find({ year: Number(filter.year) }); //MongoDb
    }
    console.log(`query: ${query}`);

    return query;
  },

  createMovie(data) {
    const movie = new Movie(data);
    movie.save();
  },

  async getOneById(movieId) {
    return await Movie.findOne({ _id: movieId });
  },
};
