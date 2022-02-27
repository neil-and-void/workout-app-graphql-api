import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input WorkoutFilter {
    id: Int
  }

  extend type Query {
    workout(filter: WorkoutFilter): [Workout]
  }

  type Workout {
    id: ID!
    started: String!
    ended: String
    active: Boolean
    exercises: [Exercise]
    workoutTemplate: WorkoutTemplate
  }
`;
