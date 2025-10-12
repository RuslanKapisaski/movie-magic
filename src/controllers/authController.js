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

export default authController;
