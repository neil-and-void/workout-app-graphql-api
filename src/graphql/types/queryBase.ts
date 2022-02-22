import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # Define type for other schemas to extend
  type Query {
    _: Boolean
  }
`;
