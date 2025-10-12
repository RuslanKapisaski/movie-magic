import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants.js";

function authMiddleware(req, res, next) {
	const token = req.cookies["auth"];

	if (!token) {
		return next();
	}

	try {
		const decodedToken = jwt.verify(token, JWT_SECRET);
		//valid user
		next();
	} catch (error) {
		//invlid user
		res.clearCookie("auth");
		res.render("/auth/login");
	}
}

export default authMiddleware;
