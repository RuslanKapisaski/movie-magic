import express, { request } from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import routes from "./routes.js";
import authMiddleware from "./middlewares/authMiddleware.js";

const app = express();

//setup database
const url = "mongodb://127.0.0.1:27017";
try {
	await mongoose.connect(url, {
		dbName: "movie-magic",
	});
	console.log("✅ Connected to MongoDB");
} catch (error) {
	console.error("❌ Problem with connecting to database:", error);
}
//setup handlebars
app.engine(
	"hbs",
	handlebars.engine({
		extname: "hbs",
		runtimeOptions: {
			allowProtoPropertiesByDefault: true,
			allowProtoMethodsByDefault: true,
		},
	})
);

//set view engine
app.set("view engine", "hbs");
app.set("views", "src/views");

//setup middlewares
app.use(express.static("src/public"));
app.use(express.urlencoded());
app.use(cookieParser());
app.use(authMiddleware);

app.use(routes);
app.get("*splat", (req, res) => {
	res.render("404");
});

app.listen(5000, () =>
	console.log("Server is listening on http://localhost:5000...")
);
