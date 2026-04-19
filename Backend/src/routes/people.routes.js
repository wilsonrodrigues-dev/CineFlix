import { Router } from "express";
import { getPeopleController, getPersonDetailsController } from "../controllers/people.controller.js";

const router = Router();

router.get("/actors",getPeopleController); 
router.get("/actors/:id",getPersonDetailsController);

export default router;