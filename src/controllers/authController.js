import { Router } from "express";

const authController = Router();

authController.get("/auth", (req, res) => {
	res.send("Works");
});

export default authController;
