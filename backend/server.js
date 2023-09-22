const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
// const cors = require("cors");

// connection to DataBase
connectDB();

const port = 5000;
const app = express();

// MiddleWare for manage data of request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/post", require("./routes/post.routes"));

// Run server
app.listen(port, () => console.log("Le server a démarré au port " + port));
