import express from "express";
import http from "http";
import { env } from "./config/env";
import { connectDB } from "./config/db";
import routes from "./routes";
import { errorHandler } from "./common/errors/errorHandler";
import { initSocket } from "./sockets/socket";

const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use("/api/v1", routes);

app.use(errorHandler);

initSocket(server);

const startServer = async () => {
  await connectDB();

  server.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
  });
};

startServer();