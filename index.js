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

class Client {
    constructor(id, { firstName, lastName, company, email }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.email = email;
    }
}

const clientsDB = {};

// Resolvers
const root = {
    client: () => {
        return {
            "id": 1234567890,
            "firstName": "Richar ",
            "lastName": "Urbano M",
            "company": "Kymera Lab",
            "email": "raurbanom@kymera.com"
        };
    },

    createClient: ({ input }) => {
        const id = require("crypto").randomBytes(10).toString("hex");

        clientsDB[id] = input;
        return new Client(id, input);
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