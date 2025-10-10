import { Router } from "express";

const castController = Router();

castController.get("/cast", (req, res) => {
  res.send("It works");
});

export default castController;
