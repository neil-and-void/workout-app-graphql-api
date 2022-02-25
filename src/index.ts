import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { decodeAccessToken } from './utils/token';

export default async function startApolloServer(
  typeDefs: any,
  resolvers: any,
  nodeEnv: string
) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    nodeEnv,
    context: ({ req }) => {
      const token = (req.headers['x-access-token'] || '') as string;
      const user = decodeAccessToken(token);

      return { user };
    },
  });

  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}
