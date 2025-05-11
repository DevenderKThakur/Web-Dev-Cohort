import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log("Error while connection to mongoDB", error));
};

export default db;
