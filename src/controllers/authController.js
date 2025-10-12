import { Router } from "express";
import userService from "../services/userService.js";

const authController = Router();

authController.get("/auth/register", (req, res) => {
	res.render("register");
});

authController.post("/auth/register", async (req, res) => {
	const userData = req.body;
	await userService.register(userData);

	res.redirect("/");
});

authController.get("/auth/login", (req, res) => {
	res.render("login");
});

authController.post("/auth/login", async (req, res) => {
	const { email, password } = req.body;

	const token = await userService.login(email, password);

	console.log(token);

	res.redirect("/");
});

export default authController;
