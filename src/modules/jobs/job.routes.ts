// src/modules/jobs/job.routes.ts
import { Router } from "express";
import { create, allJobs } from "./job.controller";
import { protect } from "../../common/middlewares/auth.middleware";
import { authorize } from "../../common/middlewares/role.middleware";
import { Role } from "../../common/constants/roles";

const router = Router();

router.post(
  "/",
  protect,
  authorize(Role.CLIENT),
  create
);

router.get("/", allJobs);

export default router;