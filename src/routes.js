import { Router } from "express";

import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";
import castController from "./controllers/castController.js";

const routes = Router();

routes.use(homeController);
routes.use(movieController);
routes.use(castController);

export default routes;
