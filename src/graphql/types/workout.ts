import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input WorkoutFilter {
    id: Int
    active: Boolean
  }

  input ExerciseData {
    exerciseTemplateId: Int
    setData: [SetData]
  }

  input SetData {
    exerciseId: Int
    weight: Float
    reps: Int
  }

  extend type Query {
    workout(filter: WorkoutFilter): [Workout]
  }

  extend type Mutation {
    workout(workoutTemplateId: Int): Workout
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
