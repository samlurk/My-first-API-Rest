import { Request, Response, NextFunction } from 'express';

export const logMiddleware = (req: Request, _res: Response, next: NextFunction) => {
  const header = req.headers['user-agent'];
  console.log(header);
  next();
};
