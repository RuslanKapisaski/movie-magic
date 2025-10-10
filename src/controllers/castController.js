import { Router } from "express";
import castService from "../services/castService.js";

const castController = Router();

castController.get("/casts/create", (req, res) => {
  res.render("casts/create");
});

castController.post("/casts/create", async (req, res) => {
  const castData = req.body;
  await castService.create(castData);
  res.redirect("/");
});

export default castController;
