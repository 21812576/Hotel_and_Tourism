import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./Routes/auth.js";
import categoryRoutes from "./Routes/category.js";
import roomRoutes from "./Routes/room.js";
import bookingRoutes from "./Routes/booking.js";
import reserveRoutes from "./Routes/reserve.js";
import cors from "cors";


dotenv.config();

const app = express();

//db
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected"))
.catch((err) => console.log("Db ERROR => " , err));

//middlewars
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//router middleware
app.use("/api",authRoutes);
app.use("/api",categoryRoutes);
app.use("/api",roomRoutes);
app.use("/api",bookingRoutes);
app.use("/api",reserveRoutes);


const port = process.env.PORT || 8000;

app.listen(port , () =>{

    console.log(`node server is running on port ${port}`);

});

