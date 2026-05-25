import { Router } from "express";
import { createCheckoutSession } from "./payment.controller";
import { protect } from "../../common/middlewares/auth.middleware";

const router = Router();

router.post("/checkout", protect, createCheckoutSession);

export default router;