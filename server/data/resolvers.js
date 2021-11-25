import mongoose from "mongoose";
import { Client } from "./db";

// Resolvers
export const resolvers = {
    Query: {
        getClients: (_, { limit }) => {
            return Client.find({}).limit(limit);
        },

        getClient: (_, { id }) => {
            return new Promise((resolve, rejects) => {
                Client.findById({ _id: id }, (error, client) => {
                    if (error) rejects(error);
                    resolve(client);
                });
            });
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
        },

        updateClient: (_, { input }) => {
            return new Promise((resolve, rejects) => {
                Client.findOneAndUpdate({ _id: input.id }, input, { new: true }, (error, client) => {
                    if (error) rejects(error);
                    resolve(client)
                });
            });
        },

        deleteClient: (_, { id }) => {
            return new Promise((resolve, rejects) => {
                Client.findOneAndRemove({ _id: id }, (error) => {
                    if (error) rejects(error);
                    resolve("Client has been deleted!")
                })
            });
        }
    }
};