const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const multer = require("multer");
const path = require("path");
const cors = require("cors");

// connection to DataBase
connectDB();

const port = 5000;
const app = express();

// Auth CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Storage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "location/");
  },
  filename: (req, file, cb) => {
    if (file) {
      cb(null, `${Date.now()}_${file.originalname}`);
    } else {
      cb(new Error("File is undefined"), null);
    }
  },
});

const upload = multer({ storage: storage });

// MiddleWare for manage data of request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});
app.use("/post", require("./routes/post.routes"));
app.post("/upload", (req, res) => {
  upload.single("image")(req, res, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Reste du traitement
    // res.json({ imageUrl: `/location/${req.file.filename}` });
    console.log(res.imageUrl);
  });
});

// Run server
app.listen(port, () => console.log("Le server a démarré au port " + port));
