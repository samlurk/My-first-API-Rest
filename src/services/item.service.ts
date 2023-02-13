import type { Car } from '../interfaces/car.interface';
import ItemModel from '../models/car.model';

export const insertCar = async (item: Car): Promise<Car> => {
  const responseInsert = await ItemModel.create(item);
  return responseInsert;
};

export const getCars = async (): Promise<Car[]> => {
  const responseItem = await ItemModel.find({});
  return responseItem;
};

export const getCar = async (id: string): Promise<Car> => {
  const responseItem = (await ItemModel.findOne({ _id: id })) as Car;
  return responseItem;
};

export const updateCar = async (id: string, data: Car): Promise<Car> => {
  const responseItem = (await ItemModel.findOneAndUpdate({ _id: id }, data, { new: true })) as Car;
  return responseItem;
};

export const deleteCar = async (id: string): Promise<{ acknowledged: Boolean; deletedCount: Number }> => {
  const responseItem = await ItemModel.deleteOne({ _id: id });
  return responseItem;
};
