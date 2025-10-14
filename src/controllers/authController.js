import { Router } from "express";
import authService from "../services/authService.js";

const authController = Router();

authController.get("/auth/register", (req, res) => {
	res.render("register");
});

authController.post("/auth/register", async (req, res) => {
	const userData = req.body;
	console.log(userData);

	try {
		await authService.register(userData);
		res.redirect("/");
	} catch (err) {
		res
			.status(400)
			.render("register", { error: err.message, email: userData.email });
	}
});

authController.get("/auth/login", (req, res) => {
	res.render("login");
});

authController.post("/auth/login", async (req, res) => {
	const { email, password } = req.body;

	const token = await authService.login(email, password);

	res.cookie("auth", token);

	res.redirect("/");
});

authController.get("/auth/logout", (req, res) => {
	res.clearCookie("auth");

	res.redirect("/");
});

export default authController;
