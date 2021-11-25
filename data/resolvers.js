import mongoose from "mongoose";
import { Client } from "./db";

// Resolvers
export const resolvers = {
    Query: {
        getClient: (_, { id }) => {
            return new Client(id, clientsDB[id]);
        }
    },
    Mutation: {
        createClient: (_, { input }) => {
            const newClient = new Client({
                firstName: input.firstName,
                lastName: input.lastName,
                company: input.company,
                emails: input.emails,
                years: input.years,
                type: input.type,
                orders: input.orders
            });

            newClient.id = newClient._id;

            return new Promise((resolve, rejects) => {
                newClient.save((error) => {
                    if (error) rejects(error);
                    resolve(newClient);
                })
            });
        }
    }
};