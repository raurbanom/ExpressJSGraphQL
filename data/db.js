import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/clients", {
    useNewUrlParser: true
});

// Define Schema of Clients
const ClientSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    company: String,
    emails: Array,
    years: String,
    type: String,
    orders: Array
});

const Client = mongoose.model("Client", ClientSchema);

export { Client };