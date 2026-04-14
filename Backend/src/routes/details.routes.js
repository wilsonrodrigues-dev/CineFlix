import { Router } from "express";
import { mediaData } from "../controllers/details.controller.js";

const router=Router()

router.get("/details/:type/:id",mediaData)

export default router