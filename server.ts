import dotenv from 'dotenv';
import resolvers from './src/graphql/resolvers';

import startApolloServer from './src';
import { typeDefs } from './src/graphql/types';

dotenv.config();

startApolloServer(typeDefs, resolvers);
