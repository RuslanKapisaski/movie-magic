import movieService from "../services/movieService.js";

export async function isMovieCreator(req, res, next) {
	if (!req.isAuthenticated) {
		return res.redirect("/auth/login");
	}

	const movieId = req.params.movieId;
	const movie = await movieService.getOneById(movieId);

	if (req.user.id !== movie.creator?.toString()) {
		return res
			.status(401)
			.render("404", { error: "Only movie creator can edit this movie!" });
	}

	req.movie = movie;
	next();
}
