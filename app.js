const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const URI = require("./config/index");

const PORT = process.env.PORT || 5000;

//import items route
const itemsRoute = require("./routes/itemRoute");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

mongoose.connect(process.env.DB_CONNECTION || URI, {
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

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}
app.use("/api/items", itemsRoute);

//Listening to the server
app.listen(PORT);
