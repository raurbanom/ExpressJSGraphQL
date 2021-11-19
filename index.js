import express from "express";

// GraphQL
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

const app = express();
const port = parseInt(process.env.PORT, 10) || 4040;

app.set("port", port);
app.get("/", (req, res) => {
    res.send("GET Request Called");
});

// Resolvers
const root = {
    hola: () => {
        return 'Hello world!';
    }
};

// The root provides a resolver function for each API endpoint
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

// Listen and running server
app.listen(app.get("port"), () => {
    console.log(`Running a GraphQL API server at http://localhost:${app.get("port")}/graphql`);
});