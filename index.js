const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fallback = require('express-history-api-fallback');
require("dotenv").config();
require("./dbconn");
const storage = require("./stdpic");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/getcard", require("./routes/register"));

const upload = multer({ storage });
app.post("/upload", upload.single("file"), (req, res) => {
  res.send({ imageUrl: "http://localhost:3001/images/" + req.file.filename });
});

app.use(fallback("index.html",{root: __dirname+"/public"}));

app.listen(3001, () => console.log("Server is 3001 running"));
