import { Storage } from '../interfaces/storage.interface';
import StorageModel from '../models/storage.model';

export const registerUpload = async ({ fileName, idUser, path }: Storage): Promise<Storage> => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};
