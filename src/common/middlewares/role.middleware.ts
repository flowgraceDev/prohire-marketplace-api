// src/common/middlewares/role.middleware.ts
import { Request, Response, NextFunction } from "express";
import { Role } from "../constants/roles";

export const authorize =
  (...roles: Role[]) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const user = (req as any).user;

    if (!user || !roles.includes(user.role)) {
      res.status(403).json({
        success: false,
        message: "Forbidden"
      });
      return;
    }

    next();
  };