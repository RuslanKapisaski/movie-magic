import { Router } from "express";
import movieService from "../services/movieService.js";

const movieController = Router();

movieController.get("/movies/create", (req, res) => res.render("create"));

movieController.post("/movies/create", (req, res) => {
	const movieData = req.body;
	movieService.createMovie(movieData);
	res.redirect("/");
});

export default movieController;
