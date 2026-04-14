import { Router } from "express";
import { getTVShowsController } from "../controllers/tvshows.controller.js";


const router = Router();

router.get("/tvshows",getTVShowsController);


export default router;