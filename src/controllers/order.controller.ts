import type { Request, Response } from 'express';
import { RequestExt } from '../interfaces/req.ext.interface';
import { handleHttp } from '../utils/error.handle';

export const getItems = async (req: RequestExt, res: Response) => {
  try {
    return res.send({ message: 'This is seen only by people with permissions', user: req.user });
  } catch (_) {
    return handleHttp(res, 404, 'Orders not found');
  }
};
