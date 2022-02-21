import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Set {
    id: ID!
    weight: Int
    reps: Int
  }
`;
