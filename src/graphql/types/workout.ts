import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Workout {
    id: ID!
    started: String!
    ended: String
    active: Boolean
    exercises: Exercise
    workoutTemplate: WorkoutTemplate
  }
`;
