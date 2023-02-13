import { hash, compare } from 'bcryptjs';

export const encrypt = async (pwd: string) => {
  const pwdHash = await hash(pwd, 10);
  return pwdHash;
};
export const verified = async (pwd: string, pwdHash: string) => {
  const isCorrect = await compare(pwd, pwdHash);
  return isCorrect;
};
