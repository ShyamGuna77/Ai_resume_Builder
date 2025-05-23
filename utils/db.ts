

import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config()

export const ConnectDB = async () => {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined in the environment variables");
        }
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.error("error connecting",error)
        
    }
}