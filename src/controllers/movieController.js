import { Router } from "express";

const movieController = Router();

movieController.get("/movies/create", (req, res) => res.render("create"));

movieController.post("/movies/create", (req, resp) => {
	const movieData = req.body();
    console.log(movie);
    
});
export default movieController;
