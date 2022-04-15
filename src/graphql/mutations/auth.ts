import {
  ApolloError,
  AuthenticationError,
  ValidationError,
} from 'apollo-server-express';
import { comparePassword, hashPassword } from '../../utils/auth';
import crud from '../../database/crud';
import { signAccessToken, signRefreshToken } from '../../utils/token';

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

export const authMutations = {
  login: async (_: any, { email, password }: LoginArgs) => {
    const dbUser = await crud.user.getUserByEmail(email);

    if (!dbUser) {
      throw new ApolloError('User Not found', 'NOT_FOUND');
    }

    const hashedPassword = dbUser.hashed_password as string;
    const authenticated = await comparePassword(hashedPassword, password);

    if (!authenticated) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const payload = {
      id: dbUser.id,
      email: dbUser.email,
      firstname: dbUser.firstname,
    };

    const refreshToken = signRefreshToken(payload);
    const accessToken = signAccessToken(payload);

    return {
      refreshToken,
      accessToken,
    };
  },
  signup: async (
    _: any,
    { email, firstname, password, confirmPassword }: SignupArgs
  ) => {
    if (password !== confirmPassword) {
      throw new ValidationError("Password and confirm passwords don't match");
    }

    const dbUser = await crud.user.getUserByEmail(email);

    if (dbUser) {
      throw new ApolloError('email already exists', 'EMAIL_EXISTS');
    }

    const hash = await hashPassword(password);
    const newUser = await crud.user.createUser(email, firstname, hash);

    const payload = {
      id: newUser.id,
      email: newUser.email,
      firstname: newUser.firstname,
    };

    const refreshToken = signAccessToken(payload);
    const accessToken = signAccessToken(payload);

    return {
      refreshToken,
      accessToken,
    };
  },
};
