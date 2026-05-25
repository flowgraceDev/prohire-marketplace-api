// src/modules/messages/message.routes.ts
import { Router } from "express";
import {
  sendMessage,
  getMessages
} from "./message.controller";
import { protect } from "../../common/middlewares/auth.middleware";

const router = Router();

router.post("/", protect, sendMessage);
router.get("/:userId", protect, getMessages);

export default router;