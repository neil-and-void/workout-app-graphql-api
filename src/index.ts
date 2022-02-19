import express from 'express';
import { ApolloServer } from 'apollo-server-express';

export default async function startApolloServer(typeDefs: any, resolvers: any) {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${4000}`);
  });
}
