import { Router } from "express";
import { homeData } from "../controllers/home.controller.js";

const router=Router()


router.get("/home",homeData)



export default router