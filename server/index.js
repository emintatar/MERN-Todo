const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || "127.0.0.1";

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "This is home route!" });
});

const todoRoute = require("./routes/todoRoute");
app.use("/", todoRoute);

app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});
