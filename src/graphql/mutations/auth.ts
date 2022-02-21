import { hashPassword } from 'src/utils/auth';
import crud from '../../database/crud';

// mutation args types

interface SignupArgs {
  email: string;
  firstname: string;
  password: string;
  confirmPassword: string;
}

interface LoginArgs {
  email: string;
  password: string;
}

export const mutationResolvers = {
  login: (_: any, { email, password }: LoginArgs) => {
    return crud.user.getUserByEmail(email);
  },
  signup: async (
    _: any,
    { email, firstname, password, confirmPassword }: SignupArgs
  ) => {
    if (password !== confirmPassword) return;
    const hash = await hashPassword(password);
    return crud.user.createUser(email, firstname, hash);
  },
};
