// src/modules/users/user.service.ts
import { User } from "./user.model";
import { AppError } from "../../common/errors/AppError";

export const getProfile = async (userId: string) => {
  const user = await User.findById(userId).select("-password");

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const updateProfile = async (
  userId: string,
  data: Partial<any>
) => {
  const user = await User.findByIdAndUpdate(
    userId,
    data,
    { new: true }
  ).select("-password");

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};