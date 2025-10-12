import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

export function authMiddleware(req, res, next) {
	const token = req.cookies["auth"];

	if (!token) {
		return next();
	}

	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);

		//valid user
		req.user = decodedToken;
		req.isAuthenticated = true;

		next();
	} catch (error) {
		//invlid user
		res.clearCookie("auth");
		res.render("/auth/login");
	}
}

export function isAuth(req, res, next) {
	if (!req.isAuthenticated) {
		return res.render("login");
	}
	next();
}
