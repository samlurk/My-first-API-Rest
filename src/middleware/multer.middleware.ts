import { Request, Response, NextFunction } from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, './uploads');
  },
  filename: function (_req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9) + '.jpg';
    cb(null, file.fieldname + '-' + uniqueSuffix);
  }
});

export const multerMiddleware = multer({ storage: storage });
