import mongoose from "mongoose";

mongoose.connect("stringLinkMongoDB");

let db = mongoose.connection;

export default db;
