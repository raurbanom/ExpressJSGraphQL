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
const resolvers = {
    getClient: ({ id }) => {
        return new Client(id, clientsDB[id]);
    },

    createClient: ({ input }) => {
        const id = require("crypto").randomBytes(10).toString("hex");

        clientsDB[id] = input;

        return new Client(id, input);
    }
};

export default resolvers;