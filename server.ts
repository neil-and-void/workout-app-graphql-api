import dotenv from 'dotenv';
dotenv.config();

import startApolloServer from './src';
import { typeDefs, resolvers } from './src/graphql';

startApolloServer(typeDefs, resolvers);
