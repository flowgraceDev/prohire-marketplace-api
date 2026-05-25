import { Request, Response } from "express";
import { stripe } from "../../config/stripe";
import { Payment } from "./payment.model";
import { env } from "../../config/env";
export const createCheckoutSession = async (
  req: Request,
  res: Response
) => {
  const { amount, contractId } = req.body;
  const clientId = (req as any).user.userId;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: "Contract Payment"
          },
          unit_amount: amount * 100
        },
        quantity: 1
      }
    ],
    success_url: `${env.CLIENT_URL}/success`,
cancel_url: `${env.CLIENT_URL}/cancel`
  });

  await Payment.create({
    contract: contractId,
    client: clientId,
    amount,
    stripeSessionId: session.id
  });

  res.json({ url: session.url });
};