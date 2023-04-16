require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const usersRoutes = require("./routes/users");

mongoose
  .connect("mongodb://mongo-db:27017/app-web")
  .then(() => console.log("Connected"))
  .catch(() => console.log("Not connected on DB"));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan());

app.use("/users", usersRoutes);

app.listen(5001, console.log("Running on 5001"));

