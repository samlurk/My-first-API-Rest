import type { Gas, ColorCar } from '../enums/car.enum';

export interface Car {
  name: string;
  color: ColorCar;
  gas: Gas;
  year: number;
  description: string;
  price: number;
}
