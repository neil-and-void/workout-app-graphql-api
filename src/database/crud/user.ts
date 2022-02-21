import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * CREATE new user in db
 *
 * @param email email of new user
 * @param firstname firstname of new user
 * @param hash hashed password
 *
 */
export const createUser = async (
  email: string,
  firstname: string,
  hash: string
) => {
  return await prisma.users.create({
    data: {
      email: email,
      firstname: firstname,
      hashed_password: hash,
    },
  });
};

/**
 * READ user by id
 *
 * @param id id of the user to get
 */
export const getUser = async (id: number) => {
  return await prisma.users.findUnique({
    where: {
      id: Number(id),
    },
  });
};

/**
 * READ user by email
 *
 * @param email of the user retrieve
 * @returns
 */
export const getUserByEmail = async (email: string) => {
  return await prisma.users.findUnique({
    where: {
      email,
    },
  });
};
