import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Set {
    id: ID!
    exerciseId: Int
    weight: Int
    reps: Int
  }

  input CreateSetInput {
    exerciseId: Int!
    weight: Int
    reps: Int
  }

  extend type Mutation {
    createSet(set: CreateSetInput): Set
  }
`;
