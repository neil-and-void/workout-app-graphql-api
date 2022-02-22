import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    user(id: Int): User
  }

  type User {
    id: ID!
    email: String!
    firstname: String!
    workouts: [Workout]
    workoutTemplates: [WorkoutTemplate]
  }
`;
