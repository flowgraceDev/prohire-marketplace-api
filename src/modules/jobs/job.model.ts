// src/modules/jobs/job.model.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  description: string;
  budget: number;
  client: mongoose.Types.ObjectId;
}

const jobSchema = new Schema<IJob>(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    budget: {
      type: Number,
      required: true
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  { timestamps: true }
);

export const Job = mongoose.model<IJob>("Job", jobSchema);