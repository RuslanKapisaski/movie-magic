import { Router } from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import movieService from "../services/movieService.js";
import castService from "../services/castService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const movieController = Router();

movieController.get("/movies/create", isAuth, (req, res) => {
	res.render("create");
});

movieController.post("/movies/create", isAuth, async (req, res) => {
	const movieData = req.body;
	const userId = req.user.id;
	try {
		await movieService.createMovie({
			movieData,
			userId,
			categories: getMovieCategory(),
		});
		res.redirect("/");
	} catch (error) {
		const errorMessage = getErrorMessage(error);
		const categoriesViewData = getMovieCategory(movieData.category);
		console.log(categoriesViewData);

		res.status(400).render("create", {
			error: errorMessage,
			movie: movieData,
			categories: categoriesViewData,
		});
	}
});

movieController.get("/movies/:movieId/details", async (req, res) => {
	const movieId = req.params.movieId;
	try {
		const movie = await movieService.getOneById(movieId);
		console.log(movie);

		const isCreator = movie.creator?.toString() === req.user?.id ? true : false;
		const movieCast = await castService.getAll({ includes: movie.casts });
		const movieRationgViewData = " &#x2605".repeat(Math.trunc(movie.rating));
		res.render("details", {
			movie,
			rating: movieRationgViewData,
			casts: movieCast,
			isCreator,
			isAuthendticated: req.isAuthendticated,
		});
	} catch {
		res.redirect("/404");
	}
});

movieController.get("/movies/search", async (req, res) => {
	const filter = req.query;

	const movies = await movieService.getAll(filter);

	res.render("search", { movies, filter });
});

movieController.get("/movies/:movieId/attach", async (req, res) => {
	const movieId = req.params.movieId;
	const movie = await movieService.getOneById(movieId);
	const cast = await castService.getAll();
	res.render("casts/attach", { movie, cast });
});

movieController.post("/movies/:movieId/attach", isAuth, async (req, res) => {
	const castId = req.body.cast;
	const movieId = req.params.movieId;
	try {
		await movieService.attach(movieId, castId);
		res.redirect(`/movies/${movieId}/details`);
	} catch (err) {
		const error = getErrorMessage(err);

		res.status(400).render("casts/attach", { error });
	}
});

movieController.get("/movies/:movieId/edit", async (req, res) => {
	const movie = await movieService.getOneById(req.params.movieId);

	const movieCategories = getMovieCategory(movie.category);

	res.render("edit", { movie, categories: movieCategories });
});

movieController.post("/movies/:movieId/edit", async (req, res) => {
	const movieData = req.body;
	const movieId = req.params.movieId;
	try {
		await movieService.edit(movieId, movieData);
		res.redirect(`/movies/${movieId}/details`);
	} catch (err) {
		const errorMessage = getErrorMessage(err);

		res.status(400).render(`edit`, {
			movie: movieData,
			categories: getMovieCategory(),
			error: errorMessage,
		});
	}
});

movieController.get("/movies/:movieId/delete", async (req, res) => {
	const movieId = req.params.movieId;
	await movieService.delete(movieId);
	res.redirect("/");
});

function getMovieCategory(selectedCategory) {
	const movieCategories = [
		{ value: "tv-show", label: "TV Show" },
		{ value: "animation", label: "Animation" },
		{ value: "movie", label: "Movie" },
		{ value: "documentary", label: "Documentary" },
		{ value: "short-film", label: "Short Film" },
	];

	const viewData = movieCategories.map((category) => ({
		...category,
		selected: selectedCategory === category.value ? "selected" : " ",
	}));

	return viewData;
}
export default movieController;
