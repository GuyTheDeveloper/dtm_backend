import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/subjects", controller.GETFIRST);
router.get("/subjects/:first_subject_id", controller.GETSECOND);
// router.post("/subjects", controller.POST);
// router.put("/subjects/:subjectId", controller.PUT);
// router.delete("/subjects/:subjectId", controller.DELETE);

export default router;
