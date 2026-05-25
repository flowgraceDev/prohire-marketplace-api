// src/modules/users/user.routes.ts
import { Router } from "express";
import { profile, update } from "./user.controller";
import { protect } from "../../common/middlewares/auth.middleware";

const router = Router();

router.get("/me", protect, profile);
router.put("/me", protect, update);

export default router;