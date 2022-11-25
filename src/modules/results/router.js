import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/results", controller.GETRESULTBYSCORE);
router.get("/results/students", controller.GETRESULTBYSCORE);
router.get("/results/:result_id", controller.GETRESULTBYID);
router.post("/results", controller.POST);

export default router;
