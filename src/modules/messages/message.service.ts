// src/modules/messages/message.service.ts
import { Message } from "./message.model";

export const createMessage = async (
  sender: string,
  data: {
    receiver: string;
    contract?: string;
    content: string;
  }
) => {
  return Message.create({
    sender,
    ...data
  });
};

export const getConversation = async (
  user1: string,
  user2: string
) => {
  return Message.find({
    $or: [
      { sender: user1, receiver: user2 },
      { sender: user2, receiver: user1 }
    ]
  }).sort({ createdAt: 1 });
};