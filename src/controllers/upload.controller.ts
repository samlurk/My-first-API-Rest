import type { Request, Response } from 'express';
import { RequestExt } from '../interfaces/req.ext.interface';
import { Storage } from '../interfaces/storage.interface';
import { registerUpload } from '../services/storage.service';
import { handleHttp } from '../utils/error.handle';

export const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { file, path, user } = req;
    const dataToRegister: Storage = {
      fileName: file!.filename,
      idUser: user!.id,
      path
    };
    const response = await registerUpload(dataToRegister);
    return res.send({ message: 'This is my file', data: response });
  } catch (_) {
    return handleHttp(res, 500, 'Error uploading file');
  }
};
