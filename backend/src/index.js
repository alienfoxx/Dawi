
import express from "express";
import dotenv from "dotenv"
import {connectDB} from './lib/db.js'

import authRoutes from './routes/auth.route.js'


const app = express();
dotenv.config()
const PORT = process.env.PORT

app.use("/api/auth",authRoutes),


app.listen(PORT,()=>{
    console.log("server is running PORT: " +  PORT);
    connectDB();
})