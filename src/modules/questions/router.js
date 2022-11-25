import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/questions", controller.GET);
router.post("/question", controller.POST);

export default router;
