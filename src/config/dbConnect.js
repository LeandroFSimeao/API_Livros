import mongoose from "mongoose";

mongoose.connect("mongodb+srv://leandro:123@node-express.tnfhb.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;