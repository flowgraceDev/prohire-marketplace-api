// src/modules/jobs/job.controller.ts
import { Request, Response } from "express";
import { asyncHandler } from "../../common/middlewares/asyncHandler";
import { createJob, getJobs } from "./job.service";

export const create = asyncHandler(
  async (req: Request, res: Response) => {
    const job = await createJob(
      (req as any).user.userId,
      req.body
    );

    res.status(201).json(job);
  }
);

export const allJobs = asyncHandler(
  async (_req: Request, res: Response) => {
    const jobs = await getJobs();

    res.status(200).json(jobs);
  }
);