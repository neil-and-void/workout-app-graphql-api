import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  ## template inputs
  input WorkoutTemplateFilter {
    id: Int
  }

  input ExerciseTemplateFilter {
    id: Int
    workoutTemplateId: Int
  }

  input WorkoutTemplateData {
    id: Int
    name: String!
    exerciseTemplates: [ExerciseTemplateData]
  }

  input ExerciseTemplateData {
    name: String!
    reps: Int!
    sets: Int!
  }

  ## query def
  extend type Query {
    exerciseTemplates(filter: ExerciseTemplateFilter): [ExerciseTemplate]
    workoutTemplates(filter: WorkoutTemplateFilter): [WorkoutTemplate]
  }

  ## mutation def
  extend type Mutation {
    createWorkoutTemplate(
      workoutTemplateData: WorkoutTemplateData
    ): CreateWorkoutTemplate
  }

  type ExerciseTemplate {
    id: ID!
    name: String!
    reps: Int!
    sets: Int!
  }

  type WorkoutTemplate {
    id: ID!
    userId: String!
    name: String!
    exerciseTemplates: [ExerciseTemplate]
  }

  type CreateWorkoutTemplate {
    id: ID!
    userId: String!
    name: String!
  }
`;
