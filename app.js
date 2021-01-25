require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv/config");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import items route
const itemsRoute = require("./routes/itemRoute");

const PORT = process.env.PORT || 5000;

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

app.use(express.static("client/build"));
app.use("/items", itemsRoute);

//Listening to the server
app.listen(PORT);
