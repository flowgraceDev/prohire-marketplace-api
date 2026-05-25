// src/modules/proposals/proposal.model.ts
import mongoose, { Schema, Document } from "mongoose";

export interface IProposal extends Document {
  job: mongoose.Types.ObjectId;
  freelancer: mongoose.Types.ObjectId;
  coverLetter: string;
  bidAmount: number;
}

const proposalSchema = new Schema<IProposal>(
  {
    job: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true
    },
    freelancer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    coverLetter: String,
    bidAmount: Number
  },
  { timestamps: true }
);

export const Proposal = mongoose.model<IProposal>(
  "Proposal",
  proposalSchema
);