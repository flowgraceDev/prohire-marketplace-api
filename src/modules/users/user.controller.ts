// src/modules/users/user.controller.ts
import { Request, Response } from "express";
import { asyncHandler } from "../../common/middlewares/asyncHandler";
import { getProfile, updateProfile } from "./user.service";

export const profile = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await getProfile((req as any).user.userId);

    res.status(200).json(user);
  }
);

export const update = asyncHandler(
  async (req: Request, res: Response) => {
    const user = await updateProfile(
      (req as any).user.userId,
      req.body
    );

    res.status(200).json(user);
  }
);