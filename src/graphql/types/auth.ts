import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Mutation {
    login(email: String, password: String): AuthSuccess
    signup(
      email: String
      firstname: String
      password: String
      confirmPassword: String
    ): AuthSuccess
  }

  type AuthSuccess {
    refreshToken: String!
    accessToken: String!
  }
`;
