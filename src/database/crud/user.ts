import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * CREATE new user in db
 *
 * @param email email of new user
 * @param firstname firstname of new user
 */
export const createUser = async (email: string, firstname: string) => {
  return await prisma.users.create({
    data: {
      email: 'elsa@prisma.io',
      firstname: 'Elsa Prisma',
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
