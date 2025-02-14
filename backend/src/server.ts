import { createServer } from "node:http";
import { Request, Response } from "express";
import { configurations } from "./config/configuration.js";
import app from "./app.js";

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).send("<h1>Server is Running...</h1>");
});

(async () => {
  const PORT = configurations.PORT ?? 4000;
  const server = createServer(app);

  server.listen(PORT, () => {
    console.log(`listening at: http://127.0.0.01:${PORT}`);
  });
})();
