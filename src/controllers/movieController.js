import { Router } from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";

const movieController = Router();

movieController.get("/movies/create", isAuth, (req, res) => {
	res.render("create");
});

movieController.post("/movies/create", isAuth, (req, res) => {
	const movieData = req.body;
	movieService.createMovie(movieData);
	res.redirect("/");
});

movieController.get("/movies/:movieId/details", async (req, res) => {
	const movieId = req.params.movieId;
	const movie = await movieService.getOneById(movieId);
	const movieCast = await castService.getAll({ includes: movie.casts });
	const movieRationgViewData = " &#x2605".repeat(Math.trunc(movie.rating));
	res.render("details", {
		movie,
		rating: movieRationgViewData,
		casts: movieCast,
	});
});

movieController.get("/movies/search", async (req, res) => {
	const filter = req.query;

	const movies = await movieService.getAll(filter);

	res.render("search", { movies, filter });
});

movieController.get("/movies/:movieId/attach", isAuth, async (req, res) => {
	const movieId = req.params.movieId;
	const movie = await movieService.getOneById(movieId);
	const cast = await castService.getAll();
	res.render("casts/attach", { movie, cast });
});

movieController.post("/movies/:movieId/attach", isAuth, async (req, res) => {
	const castId = req.body.cast;
	const movieId = req.params.movieId;

	await movieService.attach(movieId, castId);

	res.redirect(`/movies/${movieId}/details`);
});

export default movieController;
