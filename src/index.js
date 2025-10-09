import express, { request } from "express";
import handlebars from "express-handlebars";

import routes from "./routes.js";

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
app.use(express.urlencoded());

app.use(routes);

app.listen(5000, () =>
	console.log("Server is listening on http://localhost:5000...")
);
