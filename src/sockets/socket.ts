import { Server } from "socket.io";
import http from "http";
import { Message } from "../modules/messages/message.model";

let io: Server;

export const initSocket = (server: http.Server) => {
  io = new Server(server, {
    cors: {
      origin: "*"
    }
  });

  io.on("connection", socket => {
    socket.on("joinRoom", roomId => {
      socket.join(roomId);
    });

    socket.on("sendMessage", async data => {
      const saved = await Message.create(data);

      io.to(data.roomId).emit(
        "receiveMessage",
        saved
      );
    });
  });
};

export { io };