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
  res.render("details", movie);
});

movieController.get("/movies/search", (req, res) => {
  const movies = movieService.getAll();
  console.log(movies);

  res.render("search", { movies });
});

export default movieController;
