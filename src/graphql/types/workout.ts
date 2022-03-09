import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  input WorkoutFilter {
    id: Int
  }

  input NewWorkout {
    started: String!
    ended: String
    active: Boolean
    workoutTemplateId: Int
    exerciseData: [ExerciseData]
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
    workout(newWorkout: NewWorkout): Workout
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
