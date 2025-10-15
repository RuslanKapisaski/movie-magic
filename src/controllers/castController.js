import { Router } from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import castService from "../services/castService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const castController = Router();

castController.get("/casts/create", isAuth, (req, res) => {
	res.render("casts/create");
});

castController.post("/casts/create", isAuth, async (req, res) => {
	const castData = req.body;
	try {
		await castService.create(castData);
		res.redirect("/");
	} catch (err) {
		const errorMessage = getErrorMessage(err);

		res
			.status(400)
			.render("casts/create", { error: errorMessage, cast: castData });
	}
});

export default castController;
