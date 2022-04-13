require("dotenv").config();
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

const server = http.createServer(app);

const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECTION);
    server.listen(port, () => {
      console.log("Server is running on port", port, "...");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
