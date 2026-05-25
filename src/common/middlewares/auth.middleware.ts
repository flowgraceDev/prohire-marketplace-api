import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { env } from "../../config/env";

interface JwtPayload {
  userId: string;
  role: string;
}

export const protect = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({
      success: false,
      message: "Unauthorized"
    });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    req.user = jwt.verify(
      token,
      env.JWT_SECRET
    ) as JwtPayload;

    next();
  } catch {
    res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};