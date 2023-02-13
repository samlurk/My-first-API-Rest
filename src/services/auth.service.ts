import { User } from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { encrypt, verified } from '../utils/bcrypt.handle';
import { getUserByEmail } from './user.service';
import { generateToken } from '../utils/jwt.handle';

export const registerNewUser = async (authUser: User) => {
  if (await getUserByEmail(authUser.email)) throw new Error();
  authUser = { ...authUser, password: await encrypt(authUser.password) };
  const responseUser = await UserModel.create(authUser);
  return responseUser;
};

export const loginUser = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user) throw new Error();
  const isPwd = await verified(password, user.password);
  if (!isPwd) throw new Error();
  const token = generateToken(user.email);
  return {
    token: await token,
    user
  };
};
