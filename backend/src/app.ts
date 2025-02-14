import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import { corsOptions } from "./config/configuration.js";

const app = express();

// MIDDLEWARES
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

export default app;
