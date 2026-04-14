import { Router } from "express";
import { getMoviesController } from "../controllers/movie.controller.js";


const router=Router();

router.get("/movie",getMoviesController);

export default router;