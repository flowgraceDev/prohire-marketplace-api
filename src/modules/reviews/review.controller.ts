// src/modules/reviews/review.controller.ts
import { Request, Response } from "express";
import { Review } from "./review.model";

export const createReview = async (
  req: Request,
  res: Response
) => {
  const review = await Review.create(req.body);
  res.status(201).json(review);
};