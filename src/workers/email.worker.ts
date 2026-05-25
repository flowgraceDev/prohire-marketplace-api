import { Worker } from "bullmq";
import { redis } from "../config/redis";

new Worker(
  "emails",
  async job => {
    console.log("Processing email:", job.data);
  },
  { connection: redis }
);