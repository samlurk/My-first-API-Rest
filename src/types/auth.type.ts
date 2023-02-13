import { User } from '../interfaces/user.interface';

export type Auth = Pick<User, 'email' | 'password'>;
