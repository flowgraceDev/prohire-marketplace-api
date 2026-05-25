// src/modules/contracts/contract.model.ts
import mongoose, { Schema } from "mongoose";

const contractSchema = new Schema(
  {
    job: { type: Schema.Types.ObjectId, ref: "Job" },
    freelancer: { type: Schema.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      default: "active"
    }
  },
  { timestamps: true }
);

export const Contract = mongoose.model(
  "Contract",
  contractSchema
);