import { Request, Response } from "express";
import {
  createMessage,
  getConversation
} from "./message.service";

export const sendMessage = async (
  req: Request,
  res: Response
) => {
  const message = await createMessage(
    req.user!.userId,
    req.body
  );

  res.status(201).json(message);
};

export const getMessages = async (
  req: Request<{ userId: string }>,
  res: Response
) => {
  const messages = await getConversation(
    req.user!.userId,
    req.params.userId
  );

  res.status(200).json(messages);
};