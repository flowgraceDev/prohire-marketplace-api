import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import userRoutes from "../modules/users/user.routes";
import jobRoutes from "../modules/jobs/job.routes";
import proposalRoutes from "../modules/proposals/proposal.routes";
import contractRoutes from "../modules/contracts/contract.routes";
import reviewRoutes from "../modules/reviews/review.routes";
import adminRoutes from "../modules/admin/admin.routes";
import paymentRoutes from "../modules/payments/payment.routes";
import messageRoutes from "../modules/messages/message.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/jobs", jobRoutes);
router.use("/proposals", proposalRoutes);
router.use("/contracts", contractRoutes);
router.use("/reviews", reviewRoutes);
router.use("/admin", adminRoutes);
router.use("/payments", paymentRoutes);
router.use("/messages", messageRoutes);


export default router;