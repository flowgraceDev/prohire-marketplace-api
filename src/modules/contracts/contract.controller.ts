// src/modules/contracts/contract.controller.ts
import { Request, Response } from "express";
import { Contract } from "./contract.model";

export const createContract = async (
  req: Request,
  res: Response
) => {
  const contract = await Contract.create(req.body);
  res.status(201).json(contract);
};