import bcrypt from 'bcrypt';

const saltRounds: string = process.env.SALT_ROUNDS as string;

/**
 * get hash of plaintext password
 *
 * @param password plaintext password
 */
export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, Number(saltRounds));
};

/**
 * @param hash hash from db
 * @param password plaintext password
 * @return boolean
 */
export const comparePassword = async (hash: string, password: string) => {
  return await bcrypt.compare(password, hash);
};
