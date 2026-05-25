// src/modules/proposals/proposal.controller.ts
import { Request, Response } from "express";
import { asyncHandler } from "../../common/middlewares/asyncHandler";
import {
  createProposal,
  getProposals
} from "./proposal.service";

export const create = asyncHandler(async (req, res) => {
  const proposal = await createProposal(
    (req as any).user.userId,
    req.body
  );

  res.status(201).json(proposal);
});

export const all = asyncHandler(async (_req, res) => {
  const proposals = await getProposals();

  res.status(200).json(proposals);
});