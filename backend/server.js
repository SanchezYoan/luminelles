const express = require("express");
// const { connect } = require("mongoose");
const connectDB = require("dotenv").config();
// const cors = require("cors");
const dotenv = require("dotenv");

const port = 5000;
const app = express();

// MiddleWare for manage data of request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/post", require("./routes/post.routes.js"));

// Run server
app.listen(port, () => console.log("Le server à démarré au port " + port));
