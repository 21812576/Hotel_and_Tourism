import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import eventcategoryRoutes from "./routes/eventcategory.js";
import hallcategoryRoutes from "./routes/hallcategory.js";
import hallRoutes from './routes/hall.js';
import eventRoutes from './routes/event.js';
import cors from "cors";




dotenv.config();

const app = express();

//db 
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connected"))
    .catch((err) => console.log("DB ERROR => ",err));

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//router middleware
app.use("/api",authRoutes);
app.use("/api",eventcategoryRoutes);
app.use("/api",hallcategoryRoutes);
app.use("/api",hallRoutes);
app.use("/api",eventRoutes);


const port = process.env.PORT || 8000;

app.listen(8000,()=>{
    console.log(`Node server is running on ${port} `);
}); 

