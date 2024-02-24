import express from "express"
import dotenv from "dotenv"
import loginRoutes from "./routes/authRoutes.js"
import messageRoute from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectToMongo from "./db/connectToMongo.js";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT||5000;

dotenv.config();
app.use(express.json());// to parse the incoming request with JSON payload( from req.body)
app.use(cookieParser())
app.use("/api/auth",loginRoutes);
app.use("/api/message",messageRoute);
app.use("/api/user",userRoutes);


app.listen(PORT,()=>{
    connectToMongo()
    console.log(`Server is running on port ${PORT}`)
});