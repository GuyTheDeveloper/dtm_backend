import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/universities", controller.GET);
// router.get("/universities/:universityId", controller.GET);
router.post("/universities", controller.POST);
router.put("/universities", controller.PUT);
router.delete("/universities/:universityId", controller.DELETE);

export default router;
