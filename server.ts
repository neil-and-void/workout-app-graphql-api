import dotenv from 'dotenv';
import startApolloServer from './src';
import { gql } from 'apollo-server-express';

dotenv.config();

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};

startApolloServer(typeDefs, resolvers);
