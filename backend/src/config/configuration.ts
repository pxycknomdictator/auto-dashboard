export const configurations = Object.freeze({
  PORT: process.env.PORT as string,
  ORIGIN: process.env.ORIGIN as string,
  MONGODB_URL: process.env.MONGODB_URL as string,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY as string,
  JWT_EXPIRY_TIME: process.env.JWT_EXPIRY_TIME as string,
});

export const corsOptions = { origin: configurations.PORT, credentials: true };
