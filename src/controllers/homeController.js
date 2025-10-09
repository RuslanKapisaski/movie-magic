import { Router } from "express";
import movieService from "../services/movieService.js";

const homeController = Router();

homeController.get("/", (req, res) => {
  res.render("home");
});

homeController.get("/about", (req, res) => {
  res.render("about");
});

export default homeController;
