// src/modules/payments/payment.model.ts
import mongoose, { Schema, Document } from "mongoose";

export enum PaymentStatus {
  PENDING = "pending",
  SUCCESS = "success",
  FAILED = "failed"
}

export interface IPayment extends Document {
  contract: mongoose.Types.ObjectId;
  client: mongoose.Types.ObjectId;
  amount: number;
  stripeSessionId: string;
  status: PaymentStatus;
}

const paymentSchema = new Schema<IPayment>(
  {
    contract: {
      type: Schema.Types.ObjectId,
      ref: "Contract",
      required: true
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    stripeSessionId: {
      type: String
    },
    status: {
      type: String,
      enum: Object.values(PaymentStatus),
      default: PaymentStatus.PENDING
    }
  },
  { timestamps: true }
);

export const Payment = mongoose.model<IPayment>(
  "Payment",
  paymentSchema
);