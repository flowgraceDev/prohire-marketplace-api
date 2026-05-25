// src/common/utils/response.ts
import { Response } from "express";

export const sendResponse = (
  res: Response,
  statusCode: number,
  message: string,
  data?: unknown
): void => {
  res.status(statusCode).json({
    success: true,
    message,
    data
  });
};