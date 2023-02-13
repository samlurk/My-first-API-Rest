import { Request, Response, NextFunction } from 'express';
import { RequestExt } from '../interfaces/req.ext.interface';
import { handleHttp } from '../utils/error.handle';
import { verifyToken } from '../utils/jwt.handle';

export const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization ? (req.headers.authorization.split(' ').pop() as string) : ' ';
    const verifiedToken = (await verifyToken(jwtByUser)) as { id: string };
    if (!verifiedToken) throw new Error();
    req.user = verifiedToken;
    next();
  } catch (_) {
    handleHttp(res, 400, 'Invalid session');
  }
};
