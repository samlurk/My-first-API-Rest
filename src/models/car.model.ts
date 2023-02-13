import { Schema, Types, model, Model } from 'mongoose';
import { ColorCar, Gas } from '../enums/car.enum';
import type { Car } from '../interfaces/car.interface';

const ItemSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      enum: ColorCar,
      required: true
    },
    gas: {
      type: String,
      enum: Gas,
      required: true
    },
    year: {
      type: Number
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  { timestamps: true, versionKey: false }
);
const ItemModel = model('items', ItemSchema);

export default ItemModel;
