import { Router } from "express";
import { getPeopleController, getPersonDetailsController } from "../controllers/people.controller.js";

const router = Router();

router.get("/people",getPeopleController); 
router.get("/people/:id",getPersonDetailsController);

export default router;