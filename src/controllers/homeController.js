import { Router } from "express";
import movieService from "../services/movieService.js";

const homeController = Router();

homeController.get("/", (req, res) => {
	const movies = movieService.getAll();
	res.render("home", { movies });
});

homeController.get("/about", (req, res) => {
	res.render("about");
});

homeController.get("*splat", (req, res) => {
	res.render("404");
});

export default homeController;
