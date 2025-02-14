import { connect } from "mongoose";
import { configurations } from "../config/configuration.js";

const MONGODB_URL = configurations.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("Add database url in .env file");
}

export async function databaseConnection() {
  try {
    const { host, port } = (await connect(MONGODB_URL)).connection;
    console.log(`Mongodb connected !! DB HOST: http://${host}:${port}`);
  } catch (error) {
    console.error(`Failed to connect database ${error}`);
    process.exit(1);
  }
}
