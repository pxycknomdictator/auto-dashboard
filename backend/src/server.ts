import { createServer } from "node:http";
import { Request, Response } from "express";
import app from "./app.js";

app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("<h1>Hello From Express Server</h1>");
});

(async () => {
  const PORT = process.env.PORT ?? 4000;
  const server = createServer(app);

  server.listen(PORT, () => {
    console.log(`listening at: http://127.0.0.01:${PORT}`);
  });
})();
