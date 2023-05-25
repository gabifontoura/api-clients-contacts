import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const ensurePermission = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (parseInt(req.params.id) !== parseInt(res.locals.userId)) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};