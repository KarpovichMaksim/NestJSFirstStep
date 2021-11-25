import { Request, Response, NextFunction } from "express";

export function prelouder(req: Request, res: Response, next: NextFunction) {
  console.log(req);
  next();
}
