import dotenv from 'dotenv';
import resolvers from './src/graphql/resolvers';

import startApolloServer from './src';
import { typeDefs } from './src/graphql/queries/query';
import {
  typeDefsExercise,
  typeDefsUser,
  typeDefsSet,
  typeDefsWorkout,
  typeDefsTemplate,
} from './src/graphql/schemas/';

dotenv.config();

startApolloServer(
  [
    typeDefs,
    typeDefsExercise,
    typeDefsUser,
    typeDefsSet,
    typeDefsWorkout,
    typeDefsTemplate,
  ],
  resolvers
);
