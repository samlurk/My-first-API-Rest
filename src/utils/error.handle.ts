import { Response } from 'express';

export const handleHttp = (res: Response, status: number, e: string) => {
  return res.status(status).send({ message: e });
};
