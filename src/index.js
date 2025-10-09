import express, { request } from "express";
import handlebars from "express-handlebars";

import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";

const app = express();

//setup handlebars
app.engine(
	"hbs",
	handlebars.engine({
		extname: "hbs",
	})
);

//set view engine
app.set("view engine", "hbs");
app.set("views", "src/views");

//setup middlewares
app.use(express.static("src/public"));

app.use(homeController);
app.use(movieController);

app.listen(5000, () =>
	console.log("Server is listening on http://localhost:5000...")
);
