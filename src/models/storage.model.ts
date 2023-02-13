import { Schema, Types, model, Model } from 'mongoose';
import { Storage } from '../interfaces/storage.interface';

const StorageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String
    },
    idUser: {
      type: String
    },
    path: {
      type: String
    }
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
    versionKey: false
  }
);

//***** Virtuals *****/

const StorageModel = model('storage', StorageSchema);

export default StorageModel;
