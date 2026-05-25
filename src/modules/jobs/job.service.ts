// src/modules/jobs/job.service.ts
import { Job } from "./job.model";

export const createJob = async (
  userId: string,
  data: any
) => {
  return Job.create({
    ...data,
    client: userId
  });
};

export const getJobs = async () => {
  return Job.find().populate("client", "name email");
};