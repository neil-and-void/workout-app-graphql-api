import jwt from 'jsonwebtoken';

const REFRESH_SECRET = process.env.REFRESH_SECRET as string;
const ACCESS_SECRET = process.env.ACCESS_SECRET as string;
const REFRESH_AGE = process.env.REFRESH_AGE as string;
const ACCESS_AGE = process.env.ACCESS_AGE as string;

/**
 * sign a JWT token with data as payload
 *
 * @param data payload object
 * @param secret secret key
 * @param options jwt config
 * @returns token
 */
const signToken = (data: object, secret: string, options: object) => {
  return jwt.sign(data, secret, options);
};

/**
 * verify and return decoded token
 *
 * @param token token to decode
 * @param secret secret key
 * @returns object payload of JWT
 */
const decodeToken = (token: string, secret: string) => {
  return jwt.verify(token, secret);
};

/**
 * @param data payload data
 * @returns token
 */
export const signAccessToken = (data: object) => {
  return signToken(data, ACCESS_SECRET, { expiresIn: ACCESS_AGE });
};

/**
 * @param data payload data
 * @returns payload object
 */
export const decodeAccessToken = (token: string) => {
  return decodeToken(token, ACCESS_SECRET);
};

/**
 * @param data payload data
 * @returns token
 */
export const signRefreshToken = (data: object) => {
  return signToken(data, REFRESH_SECRET, { expiresIn: REFRESH_AGE });
};

/**
 * @param data payload data
 * @returns payload object
 */
export const decodeRefreshToken = (token: string) => {
  return decodeToken(token, REFRESH_SECRET);
};
