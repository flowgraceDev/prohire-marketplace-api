// src/modules/auth/auth.service.ts
import { User } from "../users/user.model";
import { hashedPassword, comparePassword } from "../../common/utils/hash";
import { generateToken } from "../../common/utils/jwt";
import { AppError } from "../../common/errors/AppError";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new AppError("User already exists", 400);
  }

  const hashPassword = await hashedPassword(password);

  const user = await User.create({
    name,
    email,
    password: hashPassword
  });

 const token = generateToken(user._id.toString(), user.role);

  return { user, token };
};

export const loginUser = async (
  email: string,
  password: string
) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) {
    throw new AppError("Invalid credentials", 401);
  }

 const token = generateToken(user._id.toString(), user.role);

  return { user, token };
};