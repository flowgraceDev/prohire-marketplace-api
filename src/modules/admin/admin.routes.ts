// src/modules/admin/admin.routes.ts
import { Router } from "express";
import { protect } from "../../common/middlewares/auth.middleware";
import { authorize } from "../../common/middlewares/role.middleware";
import { Role } from "../../common/constants/roles";

const router = Router();

router.get(
  "/dashboard",
  protect,
  authorize(Role.ADMIN),
  (_req, res) => {
    res.json({
      users: "stats",
      jobs: "stats",
      contracts: "stats"
    });
  }
);

export default router;