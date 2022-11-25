import { Router } from "express";
import controller from "./controller.js";

const router = Router();
router.get("/users", controller.GET);
router.post("/register", controller.REGISTER);
router.post("/login/email", controller.LOGIN);
router.post("/login/phone", controller.LOGINBYPHONE);

export default router;
