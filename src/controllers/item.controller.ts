import type { Request, Response } from 'express';
import { insertCar, getCars, getCar, updateCar, deleteCar } from '../services/item.service';
import { handleHttp } from '../utils/error.handle';

export const getItems = async (_: Request, res: Response) => {
  try {
    return await getCars().then((value) => res.send(value));
  } catch (_) {
    return handleHttp(res, 404, 'Cars not found');
  }
};

export const getItem = async ({ params: { id } }: Request, res: Response) => {
  try {
    return await getCar(id).then((value) => res.send(value));
  } catch (_) {
    return handleHttp(res, 404, 'Car not found');
  }
};

export const createItem = async ({ body }: Request, res: Response) => {
  try {
    return await insertCar(body).then((value) => res.send(value));
  } catch (_) {
    return handleHttp(res, 500, 'Error create Car');
  }
};

export const updateItem = async ({ params: { id }, body }: Request, res: Response) => {
  try {
    return await updateCar(id, body).then((value) => res.send(value));
  } catch (_) {
    return handleHttp(res, 500, 'Error update Car');
  }
};

export const deleteItem = async ({ params: { id } }: Request, res: Response) => {
  try {
    return await deleteCar(id).then((d) => {
      if (d.acknowledged && d.deletedCount !== 0) return res.send(d);
      throw new Error();
    });
  } catch (_) {
    return handleHttp(res, 500, 'Error delete Car');
  }
};
