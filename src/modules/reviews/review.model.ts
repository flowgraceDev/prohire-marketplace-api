// src/modules/reviews/review.model.ts
import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    reviewer: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    reviewee: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    rating: Number,
    comment: String
  },
  { timestamps: true }
);

export const Review = mongoose.model(
  "Review",
  reviewSchema
);