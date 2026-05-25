import { Router } from "express";
import { createContract } from "./contract.controller";

const router = Router();

router.post("/", createContract);

export default router;