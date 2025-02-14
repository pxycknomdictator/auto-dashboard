import { Request, Response, NextFunction } from "express";

export type Fn = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<Response | void>;

export function asyncHandler(fn: Fn) {
  return async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}
