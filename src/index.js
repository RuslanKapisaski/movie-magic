import express from "express";
import handlebars from "express-handlebars";

const app = express();

//setup handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.get("/", (req, res) => {
  res.send("Works!");
});

app.listen(5000, () =>
  console.log("Server is listening on http://localhost:5000...")
);
