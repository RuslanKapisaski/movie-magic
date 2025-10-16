import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

export function authMiddleware(req, res, next) {
	const token = req.cookies["auth"];

	if (!token) {
		res.locals.isAuthenticated = false;
		res.locals.user = null;
		return next();
	}

	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);

		//valid user
		req.user = decodedToken;
		req.isAuthenticated = true;

		// inject in order handlebars to see if a user is authenticated
		res.locals.user = decodedToken;
		res.locals.isAuthenticated = true;

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

export function isLoggedIn(req, res, next) {
	if (!req.isAuthenticated) {
		return (req.isAuthenticated = false);
	}
	next();
}
