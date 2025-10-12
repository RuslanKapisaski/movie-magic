import { Router } from "express";

const authController = Router();

authController.get("/auth/register", (req, res) => {
	res.render("register");
});

export default authController;
