import express from "express";

// GraphQL
import { graphqlHTTP } from "express-graphql";
import { schema } from "./data/schema";

const app = express();
const port = parseInt(process.env.PORT, 10) || 4040;

app.set("port", port);
app.get("/", (req, res) => {
    res.send("GET Request Called");
});

// The root provides a resolver function for each API endpoint
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

// Listen and running server
app.listen(app.get("port"), () => {
    console.log(`Running a GraphQL API server at http://localhost:${app.get("port")}/graphql`);
});