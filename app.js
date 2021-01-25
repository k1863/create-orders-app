require("dotenv/config");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import items route
const itemsRoute = require("./routes/itemRoute");
app.use("/items", itemsRoute);

//home route
app.get("/", (req, res) => {
  res.send("we are at home");
});

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

//Listening to the server
app.listen(process.env.PORT);
