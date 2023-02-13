import { Schema, Types, model, Model } from 'mongoose';
import { Country } from '../enums/country.enum';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    userName: {
      type: String
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    phone: {
      type: Number
    },
    password: {
      type: String,
      required: true
    },
    country: {
      type: String,
      enum: Country
    }
  },
  {
    toJSON: { virtuals: true },
    timestamps: true,
    versionKey: false
  }
);

//***** Virtuals *****/
UserSchema.virtual('fullName').get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const UserModel = model('users', UserSchema);

export default UserModel;
