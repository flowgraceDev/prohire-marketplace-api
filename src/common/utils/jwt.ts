import jwt from "jsonwebtoken";
import { env } from "../../config/env";
import { Role } from "../constants/roles";

export const generateToken = (
  userId: string,
  role: Role
): string => {
  return jwt.sign(
    { userId, role },
    env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};