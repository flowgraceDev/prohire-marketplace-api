// src/modules/reviews/review.routes.ts
import { Router } from "express";
import { createReview } from "./review.controller";

const router = Router();

router.post("/", createReview);

export default router;