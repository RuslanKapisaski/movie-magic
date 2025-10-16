import { Router } from "express";

import movieService from "../services/movieService.js";
import { isLoggedIn } from "../middlewares/authMiddleware.js";

const homeController = Router();

homeController.get("/", async (req, res) => {
	const movies = await movieService.getAll();

	res.render("home", {
		movies,
		isAuthenticated: req.isAuthenticated,
		user: req.user,
	});
});

homeController.get("/about", isLoggedIn, (req, res) => {
	res.render("about", { isAuthenticated: req.isAuthenticated });
});

export default homeController;
