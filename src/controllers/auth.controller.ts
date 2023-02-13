import { Request, Response } from 'express';
import { registerNewUser, loginUser } from '../services/auth.service';
import { handleHttp } from '../utils/error.handle';

export const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    return await registerNewUser(body).then((value) => res.send(value));
  } catch (_) {
    return handleHttp(res, 500, 'Error register, user already exists');
  }
};

export const loginCtrl = async ({ body: { email, password } }: Request, res: Response) => {
  try {
    return await loginUser(email, password).then((value) => res.send(value));
  } catch (_) {
    return handleHttp(res, 403, 'Incorrect email or password');
  }
};
