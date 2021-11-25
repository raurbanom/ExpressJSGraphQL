import express from "express";

// GraphQL
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";

const app = express();
const port = parseInt(process.env.PORT, 10) || 4000;

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

// Open server
startServer();

// Listen and running server
app.listen({ port: port }, () => {
    console.log(`Running a GraphQL API server at http://localhost:${port}${apolloServer.graphqlPath}`);
});