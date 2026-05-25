// src/modules/proposals/proposal.service.ts
import { Proposal } from "./proposal.model";

export const createProposal = async (
  userId: string,
  data: any
) => {
  return Proposal.create({
    ...data,
    freelancer: userId
  });
};

export const getProposals = async () => {
  return Proposal.find()
    .populate("job")
    .populate("freelancer", "name email");
};