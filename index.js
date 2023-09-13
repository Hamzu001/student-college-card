const express = require("express");
const cors = require("cors");
const fallback = require('express-history-api-fallback');
require("dotenv").config();
require("./dbconn");

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.use("/api/auth", require("./routes/auth"));
app.use("/api/getcard", require("./routes/register"));
app.use("/api/uploadphoto", require("./routes/upload"));

app.use(fallback("index.html",{root: __dirname+"/public"}));

app.listen(3001, () => console.log("Server is 3001 running"));

// const upload = multer({ storage });
// app.post("/upload", upload.single("file"), (req, res) => {
//   console.log(req.file)
//   res.send({ imageUrl: "http://localhost:3001/images/" + req.file.filename });
// });

