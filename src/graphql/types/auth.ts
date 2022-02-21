import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type AuthSuccess {
    refreshToken: String!;
    accessToken: String!;
  }

`;
