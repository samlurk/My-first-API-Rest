import type { Car } from '../interfaces/car.interface';
import ItemModel from '../models/car.model';

export const getOrders = async (): Promise<Car[]> => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};
