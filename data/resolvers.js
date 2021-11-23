class Client {
    constructor(id, { firstName, lastName, company, emails, years, type, orders }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.company = company;
        this.emails = emails;
        this.years = years;
        this.type = type;
        this.orders = orders;
    }
}

const clientsDB = {};

// Resolvers
export const resolvers = {
    Query: {
        getClient: (_, { id }) => {
            return new Client(id, clientsDB[id]);
        }
    },
    Mutation: {
        createClient: (_, { input }) => {
            const id = require("crypto").randomBytes(10).toString("hex");

            clientsDB[id] = input;

            return new Client(id, input);
        }
    }
};