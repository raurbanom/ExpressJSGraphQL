import { buildSchema } from "graphql";

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Client {
        id: ID
        firstName: String
        lastName: String
        company: String
        emails: [Email]
        years: Int
        type: ClientType
        orders: [Order]
    }

    type Email {
        email: String
    }

    type Order {
        product: String
        price: Int
    }

    input ClientInput {
        id: ID
        firstName: String!
        lastName: String!
        company: String!
        emails: [EmailInput]
        years: Int
        type: ClientType
        orders: [OrderInput]
    }

    input EmailInput {
        email: String
    }

    input OrderInput {
        product: String
        price: Int
    }

    enum ClientType {
        BASIC
        PREMIUM
    }

    # Query

    type Query {
        getClient (id: ID): Client
    }

    # Mutation

    """ Mutation to create a new Client """
    type Mutation {
        createClient(input: ClientInput): Client
    }
`);

export default schema;