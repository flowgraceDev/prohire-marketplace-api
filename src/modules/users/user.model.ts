// src/modules/users/user.model.ts
import mongoose, { Document, Schema } from "mongoose";
import { Role } from "../../common/constants/roles";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: Role;
  skills?: string[];
  hourlyRate?: number;
  verified: boolean;
}

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.FREELANCER
    },
    skills: [String],
    hourlyRate: Number,
    verified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);