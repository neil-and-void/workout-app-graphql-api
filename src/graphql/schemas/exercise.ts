import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Exercise {
    id: ID!
    exerciseTemplate: ExerciseTemplate
    sets: [Set]
  }
`;
