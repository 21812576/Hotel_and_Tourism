const express = require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const connection = mongoose.connection;
connection.once("open",function(){
    console.log("MongoDB connection success!");
})

const productsRouter = require("./routes/products.js");
const ordersRouter = require("./routes/orders.js");
const financeRouter = require("./routes/finance.js");


app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/finance", financeRouter);



app.listen(PORT, () =>{
    console.log(`server is up and running on port no: ${PORT}`)
})