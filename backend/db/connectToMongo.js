import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const connectToMongo = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,
            console.log("Connected to MongoDB ")) 
    } catch (error) {
        console.log("Error connnecting to MongoDB",error.message)
    }
}

export default connectToMongo;