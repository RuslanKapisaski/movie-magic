import { Router } from "express";
import authService from "../services/authService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const authController = Router();

authController.get("/auth/register", (req, res) => {
	res.render("register");
});

authController.post("/auth/register", async (req, res) => {
	const userData = req.body;

	try {
		await authService.register(userData);
		res.redirect("/login");
	} catch (err) {
		const errorMessage = getErrorMessage(err);
		res
			.status(400)
			.render("register", { error: errorMessage, email: userData.email });
	}
});

authController.get("/auth/login", (req, res) => {
	res.render("login");
});

authController.post("/auth/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const token = await authService.login(email, password);
		res.cookie("auth", token);
		res.redirect("/");
	} catch (err) {
		const errorMessage = getErrorMessage(err);
		res.status(400).render("login", { error: errorMessage, email });
	}
});

authController.get("/auth/logout", (req, res) => {
	res.clearCookie("auth");

	res.redirect("/");
});

export default authController;
