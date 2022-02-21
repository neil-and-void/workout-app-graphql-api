import bcrypt from 'bcrypt';

const saltRounds: number = process.env.SALT_ROUNDS;
console.log(saltRounds);

/**
 * return hash of plaintext password
 *
 * @param password plaintext password
 */
export const hashPassword = async (password: string) => {
  const hash = await bcrypt.hash(password, saltRounds);

  return hash;
};

/**
 *
 * @param hash hash from db
 * @param password plaintext password
 */
export const comparePassword = async (hash: string, password: string) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};
