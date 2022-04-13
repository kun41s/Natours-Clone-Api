const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tour");
const userRouter = require("./routes/user");

const app = express();

//Middlewares
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
