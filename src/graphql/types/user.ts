import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    user(id: Int): User
  }

  extend type Mutation {
    user(email: String, firstname: String, password: String, confirmPassword: ConfirmPassword)
  }

  type User {
    id: ID!
    email: String!
    firstname: String!
    workouts: [Workout]
    workoutTemplates: [WorkoutTemplate]
  }
`;
