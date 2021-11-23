import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Client {
        id: ID
        firstName: String
        lastName: String
        company: String
        email: String
    }

    input ClientInput {
        id: ID
        firstName: String!
        lastName: String!
        company: String!
        email: String
    }

    type Query {
        getClient (id: ID): Client
    }

    type Mutation {
        createClient(input: ClientInput): Client
    }
`);

export default schema;