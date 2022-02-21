import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type ExerciseTemplate {
    id: ID!
    name: String!
    reps: Int!
    sets: Int!
  }

  type WorkoutTemplate {
    id: ID!
    name: String!
    exerciseTemplates: ExerciseTemplate
  }
`;
