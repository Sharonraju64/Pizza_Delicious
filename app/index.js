const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/dbConnect');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const userRoutes =require("./routes/user")
const authRouter =require("./routes/auth");
const pizzaRouter = require("./routes/pizza");
const ordersRouter = require("./routes/orders");
const mypizzaRouter = require("./routes/mypizza");
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
dbConnect();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use("/api/user", userRoutes);
app.use("/api/auth", authRouter);
app.use("/api/pizza", pizzaRouter);
app.use("/api/order", ordersRouter);
app.use("/api/mypizza", mypizzaRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, ()=>{
    console.log(`Server is running at PORT ${PORT}`);
});