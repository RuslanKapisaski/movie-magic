import { Router } from "express";
import movieService from "../services/movieService.js";
import Movie from "../models/Movie.js";

const movieController = Router();

movieController.get("/movies/create", (req, res) => res.render("create"));

movieController.post("/movies/create", (req, res) => {
  const movieData = req.body;
  movieService.createMovie(movieData);
  res.redirect("/");
});

movieController.get("/movies/:movieId/details", (req, res) => {
  const movieId = req.params.movieId;
  const movie = movieService.getOneById(movieId);
  const movieRationgViewData = " &#x2605".repeat(Math.trunc(movie.rating));
  res.render("details", { movie, rating: movieRationgViewData });
});

movieController.get("/movies/search", (req, res) => {
  const filter = req.query;

  const movies = movieService.getAll(filter);

  res.render("search", { movies, filter });
});

export default movieController;
