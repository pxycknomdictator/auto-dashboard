import { createServer } from "node:http";
import { NextFunction, Request, Response } from "express";
import { configurations } from "./config/configuration.js";
import { databaseConnection } from "./lib/db.js";
import app from "./app.js";

app.get("/health", async (req: Request, res: Response, _next: NextFunction) => {
  res.status(200).send("<h1>Server is Running...</h1>");
});

// FIRE IN THE HOLE
(async () => {
  const PORT = configurations.PORT ?? 4000;
  const server = createServer(app);

  await databaseConnection();

  server.listen(PORT, () => {
    console.log(`listening at: http://127.0.0.01:${PORT}`);
  });
})();
