// src/modules/proposals/proposal.routes.ts
import { Router } from "express";
import { create, all } from "./proposal.controller";
import { protect } from "../../common/middlewares/auth.middleware";
import { authorize } from "../../common/middlewares/role.middleware";
import { Role } from "../../common/constants/roles";

const router = Router();

router.post(
  "/",
  protect,
  authorize(Role.FREELANCER),
  create
);

router.get("/", protect, all);

export default router;