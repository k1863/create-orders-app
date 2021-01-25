require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const router = require("express").Router();

const orders = require("./routes/index");

const PORT = process.env.PORT || 5000;

//import items route
const itemsRoute = require("./routes/itemRoute");

mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//When successfuly connected
mongoose.connection.on("connected", () => {
  console.log("Established Mongoose Default Connection");
});

//When connection throws an error
mongoose.connection.on("error", (err) => {
  console.log("Mongoose Default Connection Error: " + err);
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "client/build")));
app.use("/items", itemsRoute);

//Listening to the server
app.listen(PORT);
