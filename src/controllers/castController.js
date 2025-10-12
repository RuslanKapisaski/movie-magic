import { Router } from "express";

import { isAuth } from "../middlewares/authMiddleware.js";
import castService from "../services/castService.js";

const castController = Router();

castController.get("/casts/create", isAuth, (req, res) => {
	res.render("casts/create");
});

castController.post("/casts/create", isAuth, async (req, res) => {
	const castData = req.body;
	await castService.create(castData);
	res.redirect("/");
});

export default castController;
